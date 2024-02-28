import nodemailer from "npm:nodemailer";
import env from "./env.config.ts";

const auth = {
  user: env["EMAIL_USER"],
  pass: env["EMAIL_PASSWORD"],
};

const mail = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth,
});

export default mail;
