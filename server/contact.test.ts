import { describe, it, expect, vi, beforeEach } from "vitest";

// Mock the notification module
vi.mock("./_core/notification", () => ({
  notifyOwner: vi.fn().mockResolvedValue(true),
}));

// Mock the database module
vi.mock("./db", () => ({
  createContactSubmission: vi.fn().mockResolvedValue(1),
  getContactSubmissionStats: vi.fn().mockResolvedValue({ total: 0, byStatus: {} }),
  getContactSubmissionsSince: vi.fn().mockResolvedValue([]),
  getContactSubmissionsSinceWithPagination: vi.fn().mockResolvedValue({ submissions: [], total: 0 }),
  updateContactSubmissionStatus: vi.fn().mockResolvedValue(true),
}));

// Mock rate limiter to avoid rate limit issues in tests
vi.mock("./rateLimit", () => ({
  checkRateLimit: vi.fn().mockReturnValue({ isLimited: false, remaining: 5, resetTime: Date.now() + 3600000 }),
  recordRequest: vi.fn().mockReturnValue({ isLimited: false, remaining: 4, resetTime: Date.now() + 3600000 }),
  getClientIp: vi.fn().mockReturnValue("127.0.0.1"),
}));

import { appRouter } from "./routers";
import { notifyOwner } from "./_core/notification";

describe("Contact Form Submission", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  const createMockContext = () => ({
    req: {
      headers: {
        'user-agent': 'Mozilla/5.0 Test Browser',
        'x-forwarded-for': '192.168.1.1',
      },
      socket: { remoteAddress: '127.0.0.1' },
    } as any,
    res: {} as any,
    user: null,
  });

  it("should successfully submit a contact form with all fields", async () => {
    const caller = appRouter.createCaller(createMockContext());
    
    const result = await caller.contact.submit({
      name: "John Doe",
      email: "john@example.com",
      phone: "+1 234 567 8900",
      message: "I am interested in viewing ALFA NERO. Please contact me.",
    });

    expect(result.success).toBe(true);
    expect(result.message).toContain("Thank you");
    expect(notifyOwner).toHaveBeenCalledTimes(1);
    expect(notifyOwner).toHaveBeenCalledWith(
      expect.objectContaining({
        title: expect.stringContaining("John Doe"),
        content: expect.stringContaining("john@example.com"),
      })
    );
  });

  it("should successfully submit without phone number", async () => {
    const caller = appRouter.createCaller(createMockContext());
    
    const result = await caller.contact.submit({
      name: "Jane Smith",
      email: "jane@example.com",
      message: "Please send me more information about the yacht.",
    });

    expect(result.success).toBe(true);
    expect(notifyOwner).toHaveBeenCalledTimes(1);
  });

  it("should reject submission with invalid email", async () => {
    const caller = appRouter.createCaller(createMockContext());
    
    await expect(
      caller.contact.submit({
        name: "Test User",
        email: "invalid-email",
        message: "This should fail due to invalid email.",
      })
    ).rejects.toThrow();
  });

  it("should reject submission with empty name", async () => {
    const caller = appRouter.createCaller(createMockContext());
    
    await expect(
      caller.contact.submit({
        name: "",
        email: "test@example.com",
        message: "This should fail due to empty name.",
      })
    ).rejects.toThrow();
  });

  it("should reject submission with message too short", async () => {
    const caller = appRouter.createCaller(createMockContext());
    
    await expect(
      caller.contact.submit({
        name: "Test User",
        email: "test@example.com",
        message: "Short",
      })
    ).rejects.toThrow();
  });

  it("should include phone in notification when provided", async () => {
    const caller = appRouter.createCaller(createMockContext());
    
    await caller.contact.submit({
      name: "Phone Test",
      email: "phone@example.com",
      phone: "+31 6 1234 5678",
      message: "Testing phone number inclusion in notification.",
    });

    expect(notifyOwner).toHaveBeenCalledWith(
      expect.objectContaining({
        content: expect.stringContaining("+31 6 1234 5678"),
      })
    );
  });
  
  it("should silently accept honeypot submissions without processing", async () => {
    const caller = appRouter.createCaller(createMockContext());
    
    const result = await caller.contact.submit({
      name: "Bot User",
      email: "bot@spam.com",
      message: "This is a spam message from a bot.",
      website: "http://spam-site.com", // Honeypot field filled = bot
    });

    // Should return success (to not alert the bot)
    expect(result.success).toBe(true);
    // But should NOT send notification (bot detected)
    expect(notifyOwner).not.toHaveBeenCalled();
  });
});
