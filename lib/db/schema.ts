import { pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";

// 用户表
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  email: varchar("email", { length: 255 }).notNull().unique(),
  name: varchar("name", { length: 255 }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// 药材表
export const herbs = pgTable("herbs", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  pinyin: varchar("pinyin", { length: 100 }),
  category: varchar("category", { length: 50 }), // 分类：补气药、补血药等
  nature: varchar("nature", { length: 50 }), // 药性：寒、热、温、凉
  flavor: varchar("flavor", { length: 50 }), // 药味：酸、苦、甘、辛、咸
  meridian: varchar("meridian", { length: 100 }), // 归经
  efficacy: text("efficacy"), // 功效
  usage: text("usage"), // 用法用量
  notes: text("notes"), // 备注
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// 视频记录表
export const videos = pgTable("videos", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  bvid: varchar("bvid", { length: 20 }).notNull().unique(),
  aid: varchar("aid", { length: 20 }).notNull(),
  cid: varchar("cid", { length: 20 }).notNull(),
  category: varchar("category", { length: 50 }), // origin, pulse
  episodeNumber: serial("episode_number"), // 集数
  description: text("description"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// 文章表
export const articles = pgTable("articles", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  slug: varchar("slug", { length: 255 }).notNull().unique(),
  content: text("content").notNull(),
  excerpt: text("excerpt"), // 摘要
  category: varchar("category", { length: 50 }),
  published: timestamp("published_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
export type Herb = typeof herbs.$inferSelect;
export type NewHerb = typeof herbs.$inferInsert;
export type Video = typeof videos.$inferSelect;
export type NewVideo = typeof videos.$inferInsert;
export type Article = typeof articles.$inferSelect;
export type NewArticle = typeof articles.$inferInsert;
