import * as env from "env-var";
import "./dotenv";

const config = {
  server: {
    port: env.get("SERVER_PORT").default(8080).asPortNumber(),
  },
  mongo: {
    url: env.get("MONGO_URL").default("mongodb://localhost:27017/").asUrlString()
  }
};

export default config;
