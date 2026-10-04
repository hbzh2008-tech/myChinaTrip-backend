import Fastify from "fastify";
import { createHealthResponse } from "@chinatrip/shared";

const port = Number(process.env.PORT ?? 3001);
const host = process.env.HOST ?? "0.0.0.0";

const app = Fastify({ logger: true });

app.get("/health", async () => createHealthResponse("api"));

async function main() {
  await app.listen({ port, host });
}

main().catch((err) => {
  app.log.error(err);
  process.exit(1);
});
