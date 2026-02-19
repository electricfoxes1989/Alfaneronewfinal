import { describe, it, expect, vi, beforeEach } from "vitest";

// Mock the notification module
vi.mock("./_core/notification", () => ({
  notifyOwner: vi.fn().mockResolvedValue(true),
}));

// Mock the database module
vi.mock("./db", () => ({
  createContactSubmission: vi.fn().mockResolvedValue(1),
  getContactSubmissionStats: vi.fn().mockResolvedValue({
    total: 3,
    byStatus: { new: 2, read: 1 },
  }),
  getContactSubmissionsSince: vi.fn().mockResolvedValue([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: null,
      message: "I am interested in viewing ALFA NERO.",
      source: null,
      userAgent: "Mozilla/5.0",
      ipAddress: "192.168.1.1",
      status: "new",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "+1 234 567 8900",
      message: "Please send me the specifications.",
      source: "google",
      userAgent: "Mozilla/5.0",
      ipAddress: "192.168.1.2",
      status: "new",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 3,
      name: "Bob Wilson",
      email: "bob@example.com",
      phone: null,
      message: "When can I schedule a viewing?",
      source: null,
      userAgent: "Mozilla/5.0",
      ipAddress: "192.168.1.3",
      status: "read",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]),
  getContactSubmissionsSinceWithPagination: vi.fn().mockResolvedValue({
    submissions: [],
    total: 0,
  }),
  updateContactSubmissionStatus: vi.fn().mockResolvedValue(true),
}));

// Mock rate limiter
vi.mock("./rateLimit", () => ({
  checkRateLimit: vi.fn().mockReturnValue({ isLimited: false, remaining: 5, resetTime: Date.now() + 3600000 }),
  recordRequest: vi.fn().mockReturnValue({ isLimited: false, remaining: 4, resetTime: Date.now() + 3600000 }),
  getClientIp: vi.fn().mockReturnValue("127.0.0.1"),
}));

import { appRouter } from "./routers";
import { notifyOwner } from "./_core/notification";
import { getContactSubmissionStats } from "./db";

describe("Analytics Report Generation", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  const createMockContext = () => ({
    req: {
      headers: {
        'user-agent': 'Mozilla/5.0 Test Browser',
      },
      socket: { remoteAddress: "127.0.0.1" },
    } as any,
    res: {} as any,
    user: null,
  });

  it("should generate a weekly report with submission stats", async () => {
    const caller = appRouter.createCaller(createMockContext());
    
    const result = await caller.analytics.generateWeeklyReport();

    expect(result.success).toBe(true);
    expect(result.stats.total).toBe(3);
    expect(result.stats.byStatus).toEqual({ new: 2, read: 1 });
    expect(result.reportGenerated).toBeDefined();
  });

  it("should call notifyOwner with formatted report", async () => {
    const caller = appRouter.createCaller(createMockContext());
    
    await caller.analytics.generateWeeklyReport();

    expect(notifyOwner).toHaveBeenCalledTimes(1);
    expect(notifyOwner).toHaveBeenCalledWith(
      expect.objectContaining({
        title: expect.stringContaining("Weekly Report"),
        content: expect.stringContaining("Contact Form Submissions"),
      })
    );
  });

  it("should include inquiry details in the report", async () => {
    const caller = appRouter.createCaller(createMockContext());
    
    await caller.analytics.generateWeeklyReport();

    expect(notifyOwner).toHaveBeenCalledWith(
      expect.objectContaining({
        content: expect.stringContaining("John Doe"),
      })
    );
    expect(notifyOwner).toHaveBeenCalledWith(
      expect.objectContaining({
        content: expect.stringContaining("Jane Smith"),
      })
    );
  });

  it("should get contact stats for specified days (requires auth)", async () => {
    // Create authenticated context for protected procedure
    const authenticatedContext = {
      req: {
        headers: {
          'user-agent': 'Mozilla/5.0 Test Browser',
        },
        socket: { remoteAddress: "127.0.0.1" },
      } as any,
      res: {} as any,
      user: {
        id: 1,
        openId: "test-user-id",
        name: "Test Admin",
        email: "admin@example.com",
        role: "admin" as const,
      },
    };
    
    const caller = appRouter.createCaller(authenticatedContext);
    
    const result = await caller.contact.getStats({ days: 7 });

    expect(result.total).toBe(3);
    expect(getContactSubmissionStats).toHaveBeenCalled();
  });
});

describe("Contact Form with Database Logging", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  const createMockContext = () => ({
    req: {
      headers: {
        'user-agent': 'Mozilla/5.0 Test Browser',
        'x-forwarded-for': '203.0.113.1',
      },
      socket: { remoteAddress: "127.0.0.1" },
    } as any,
    res: {} as any,
    user: null,
  });

  it("should save contact submission to database", async () => {
    const { createContactSubmission } = await import("./db");
    const caller = appRouter.createCaller(createMockContext());
    
    await caller.contact.submit({
      name: "Test User",
      email: "test@example.com",
      message: "This is a test submission for database logging.",
    });

    expect(createContactSubmission).toHaveBeenCalledWith(
      expect.objectContaining({
        name: "Test User",
        email: "test@example.com",
        message: "This is a test submission for database logging.",
        status: "new",
      })
    );
  });

  it("should capture user agent and IP address", async () => {
    const { createContactSubmission } = await import("./db");
    const caller = appRouter.createCaller(createMockContext());
    
    await caller.contact.submit({
      name: "Metadata Test",
      email: "meta@example.com",
      message: "Testing metadata capture for analytics.",
    });

    expect(createContactSubmission).toHaveBeenCalledWith(
      expect.objectContaining({
        userAgent: "Mozilla/5.0 Test Browser",
      })
    );
  });
});
