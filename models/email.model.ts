import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const emailObject = z.object({
  to: z.string().email(),
  subject: z.string(),
  text: z.string(),
  html: z.string(),
});

export { emailObject };
