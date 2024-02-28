import nodemailer from "npm:nodemailer";
import env from "./env.config.ts";

const auth = {
  user: Deno.env.get("EMAIL_USER") ?? env["EMAIL_USER"],
  pass: Deno.env.get("EMAIL_PASSWORD") ?? env["EMAIL_PASSWORD"],
};

console.log(auth);

const mail = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth,
});

export default mail;
