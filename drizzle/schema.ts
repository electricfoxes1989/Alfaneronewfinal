import { int, mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * Contact form submissions table for tracking inquiries and generating reports.
 */
export const contactSubmissions = mysqlTable("contact_submissions", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  phone: varchar("phone", { length: 50 }),
  message: text("message").notNull(),
  /** Track the source/referrer if available */
  source: varchar("source", { length: 255 }),
  /** User agent for analytics */
  userAgent: text("userAgent"),
  /** IP address (anonymized for privacy) */
  ipAddress: varchar("ipAddress", { length: 45 }),
  /** Status of the submission */
  status: mysqlEnum("status", ["new", "read", "responded", "archived"]).default("new").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type ContactSubmission = typeof contactSubmissions.$inferSelect;
export type InsertContactSubmission = typeof contactSubmissions.$inferInsert;

/**
 * Image library table for managing website assets stored in S3.
 */
export const images = mysqlTable("images", {
  id: int("id").autoincrement().primaryKey(),
  /** S3 file key for storage operations */
  fileKey: varchar("fileKey", { length: 512 }).notNull().unique(),
  /** Public URL for the image */
  url: text("url").notNull(),
  /** Original filename */
  filename: varchar("filename", { length: 255 }).notNull(),
  /** MIME type (image/jpeg, image/png, etc.) */
  mimeType: varchar("mimeType", { length: 100 }).notNull(),
  /** File size in bytes */
  fileSize: int("fileSize").notNull(),
  /** Category for organization */
  category: mysqlEnum("category", [
    "master-cabin",
    "guest-cabins",
    "interior",
    "exterior",
    "deck-spaces",
    "wellness",
    "lifestyle",
    "aerial",
    "technical",
    "art",
    "uncategorized"
  ]).default("uncategorized").notNull(),
  /** Optional title for the image */
  title: varchar("title", { length: 255 }),
  /** Optional description */
  description: text("description"),
  /** Optional alt text for accessibility */
  altText: varchar("altText", { length: 255 }),
  /** Width in pixels */
  width: int("width"),
  /** Height in pixels */
  height: int("height"),
  /** User who uploaded the image */
  uploadedBy: int("uploadedBy").references(() => users.id),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Image = typeof images.$inferSelect;
export type InsertImage = typeof images.$inferInsert;

/**
 * Viewing requests table for yacht tour scheduling.
 */
export const viewingRequests = mysqlTable("viewing_requests", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  phone: varchar("phone", { length: 50 }),
  /** Preferred date for the viewing */
  preferredDate: varchar("preferredDate", { length: 50 }).notNull(),
  /** Preferred time slot */
  preferredTime: mysqlEnum("preferredTime", [
    "morning",
    "afternoon",
    "evening",
    "flexible"
  ]).default("flexible").notNull(),
  /** Number of guests attending */
  numberOfGuests: int("numberOfGuests").default(1).notNull(),
  /** Current location/port of the requester */
  currentLocation: varchar("currentLocation", { length: 255 }),
  /** Additional notes or special requests */
  notes: text("notes"),
  /** Status of the viewing request */
  status: mysqlEnum("status", ["pending", "confirmed", "completed", "cancelled"]).default("pending").notNull(),
  /** User agent for analytics */
  userAgent: text("userAgent"),
  /** IP address */
  ipAddress: varchar("ipAddress", { length: 45 }),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type ViewingRequest = typeof viewingRequests.$inferSelect;
export type InsertViewingRequest = typeof viewingRequests.$inferInsert;
