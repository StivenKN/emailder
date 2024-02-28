import { Hono } from "https://deno.land/x/hono@v4.0.8/mod.ts";
import { cors, logger } from "https://deno.land/x/hono@v4.0.8/middleware.ts";
import { JsonObjectResponse } from "./types/index.ts";
import { CORSOptions } from "./types/index.ts";
import emailRoutes from "./routes/email.routes.ts";

const app = new Hono().basePath("/api");

const corsOptions: CORSOptions = {
  origin: "*",
  allowHeaders: ["Content-Type", "Authorization"],
  allowMethods: ["GET", "POST", "PUT", "DELETE"],
  credentials: false,
  exposeHeaders: ["Content-Type", "Authorization"],
  maxAge: 3600,
};

app.use(logger());
app.use(cors(corsOptions));

app.get(
  "/",
  (c) =>
    c.json<JsonObjectResponse>({
      message: "Welcome to emailSender, try to fetch /api/v1/emails",
      code: 200,
      errors: null,
    }, 200),
);

app.route("/v1/emails", emailRoutes);

app.notFound((c) =>
  c.json<JsonObjectResponse>({
    message: "Route not found.",
    code: 404,
    errors: ["ERR_ROUTE_NOT_FOUND"],
  }, 404)
);

Deno.serve(app.fetch);
