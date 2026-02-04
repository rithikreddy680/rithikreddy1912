import { Queue } from "bullmq";
import IORedis from "ioredis";

const connection = new IORedis(process.env.REDIS_URL ?? "redis://localhost:6379");

export const exampleQueue = new Queue("example", {
  connection
});

export { connection as redisConnection };
