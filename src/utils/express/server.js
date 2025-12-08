import express from "express";
import config from "../../config/env.config";
import { initMongo } from "../mongo";
import appRouter from "./router";

const initServer = async () => {
  try {
    await initMongo(config.mongo.url);

    const app = express();

    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());

    app.use(appRouter);

    return app;
  } catch (error) {
    console.error(`Error while starting the server`);
    throw error;
  }
};

export default initServer;
