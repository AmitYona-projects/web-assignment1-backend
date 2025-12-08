import { Router } from "express";
import PostController from "../controllers/postController.js";

const postsRouter = Router();
const postController = new PostController();

postsRouter.post("/", (req, res) => postController.createPost(req, res));
postsRouter.get("/", (req, res) => postController.getAllPosts(req, res));
postsRouter.get("/sender", (req, res) =>
  postController.getPostsBySenderId(req, res)
);
postsRouter.get("/:id", (req, res) => postController.getPostById(req, res));
postsRouter.put("/:id", (req, res) => postController.updatePost(req, res));
postsRouter.delete("/:id", (req, res) => postController.deletePost(req, res));

export default postsRouter;
