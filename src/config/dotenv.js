import { config } from "dotenv";

const dotenvPath = process.env.NODE_ENV === "dev" || process.env.NODE_ENV === "test" ? ".env.dev" : ".env";

config({ path: dotenvPath });
