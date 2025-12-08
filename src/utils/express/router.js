import { Router } from "express";
import postsRouter from "../../routes/postRoutes.js";

const appRouter = Router();

appRouter.use("/posts", postsRouter);
// appRouter.use("/comments", commentsRouter);

export default appRouter;
