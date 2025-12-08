import { Router } from "express";
import postsRouter from "../../routes/postRoutes.js";
import commentsRouter from "../../routes/commentRoutes.js";

const appRouter = Router();

appRouter.use("/posts", postsRouter);
appRouter.use("/comments", commentsRouter);

export default appRouter;
