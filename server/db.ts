import { eq, gte, and, count, desc } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertUser, users, images, InsertImage, Image } from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

// ============================================
// Image Library Helpers
// ============================================

/**
 * Create a new image record in the library
 */
export async function createImage(
  image: Omit<InsertImage, 'id' | 'createdAt' | 'updatedAt'>
): Promise<number | null> {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot create image: database not available");
    return null;
  }

  try {
    const result = await db.insert(images).values(image);
    return result[0].insertId;
  } catch (error) {
    console.error("[Database] Failed to create image:", error);
    throw error;
  }
}

/**
 * Get all images, optionally filtered by category
 */
export async function getImages(
  category?: string,
  limit = 100,
  offset = 0
): Promise<{ images: Image[]; total: number }> {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get images: database not available");
    return { images: [], total: 0 };
  }

  try {
    const whereCondition = category && category !== 'all' 
      ? eq(images.category, category as any)
      : undefined;

    // Get total count
    const totalResult = await db
      .select({ count: count() })
      .from(images)
      .where(whereCondition);
    
    const total = totalResult[0]?.count ?? 0;

    // Get paginated results
    const result = await db
      .select()
      .from(images)
      .where(whereCondition)
      .orderBy(desc(images.createdAt))
      .limit(limit)
      .offset(offset);

    return { images: result, total };
  } catch (error) {
    console.error("[Database] Failed to get images:", error);
    return { images: [], total: 0 };
  }
}

/**
 * Get a single image by ID
 */
export async function getImageById(id: number): Promise<Image | null> {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get image: database not available");
    return null;
  }

  try {
    const result = await db
      .select()
      .from(images)
      .where(eq(images.id, id))
      .limit(1);
    return result[0] || null;
  } catch (error) {
    console.error("[Database] Failed to get image:", error);
    return null;
  }
}

/**
 * Update image metadata
 */
export async function updateImage(
  id: number,
  updates: Partial<Pick<InsertImage, 'title' | 'description' | 'altText' | 'category'>>
): Promise<boolean> {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot update image: database not available");
    return false;
  }

  try {
    await db
      .update(images)
      .set(updates)
      .where(eq(images.id, id));
    return true;
  } catch (error) {
    console.error("[Database] Failed to update image:", error);
    return false;
  }
}

/**
 * Delete an image record
 */
export async function deleteImage(id: number): Promise<boolean> {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot delete image: database not available");
    return false;
  }

  try {
    await db.delete(images).where(eq(images.id, id));
    return true;
  } catch (error) {
    console.error("[Database] Failed to delete image:", error);
    return false;
  }
}
