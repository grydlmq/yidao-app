import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

// 创建数据库连接
const connectionString = process.env.DATABASE_URL || "postgresql://localhost:5432/yidao";

const client = postgres(connectionString, { prepare: false });

export const db = drizzle(client);
