import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";
import { emailObject } from "../models/email.model.ts";

export type TEmailRequest = z.infer<typeof emailObject>;
