
import type { Context, Next } from "hono";

export const logger = () => async (c: Context, next: Next) => {
  console.log(`[${new Date().toISOString()}] ${c.req.method} ${c.req.url}`);
  await next();
};