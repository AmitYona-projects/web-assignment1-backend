import env from 'env-var';
import './dotenv';

const config = {
  server: {
    port: env.get('SERVER_PORT').default(3000).asPortNumber(),
  },
  mongo: {
    url: env.get('MONGO_URL').default('mongodb://127.0.0.1:27017/ksearch').asUrlString(),
  },
};

export default config;
