import { Hono } from "https://deno.land/x/hono@v4.0.8/mod.ts";
import { JsonObjectResponse } from "../types/index.d.ts";
import env from "../config/env.config.ts";
import { TEmailRequest } from "../types/emails.d.ts";
import mail from "../config/email.config.ts";
import { HTTPException } from "https://deno.land/x/hono@v4.0.8/http-exception.ts";

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

app.post("/", async (c) => {
  const { subject, to, html, text } = await c.req.json<TEmailRequest>();
  const from = env["EMAIL_USER"];
  try {
    await mail.sendMail({
      from,
      to,
      subject,
      text,
      html,
    });
    return c.json<JsonObjectResponse>({
      code: 200,
      errors: null,
      message: "Ok",
    }, 200);
  } catch (_error) {
    throw new HTTPException(500, { message: "INTERNAL_SERVER_ERR" });
  }
});

export default app;
