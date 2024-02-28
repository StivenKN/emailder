import { Hono } from "https://deno.land/x/hono@v4.0.8/mod.ts";
import { JsonObjectResponse } from "../types/index.ts";
import env from "../config/env.config.ts";

const app = new Hono();

app.get(
  "/",
  (c) =>
    c.json<JsonObjectResponse>({
      message: `Testing API email sender works! Sending from ${
        env["EMAIL_USER"]
      }`,
      code: 200,
      errors: null,
    }, 200),
);

app.post("/", (c) => {
  return c.json({ msg: "a" });
});

export default app;
