export interface JsonObjectResponse {
  message: string;
  code: number;
  errors: string[] | null;
}

export interface CORSOptions {
  origin: string | string[] | ((origin: string) => string | undefined | null);
  allowMethods?: string[];
  allowHeaders?: string[];
  maxAge?: number;
  credentials?: boolean;
  exposeHeaders?: string[];
}
