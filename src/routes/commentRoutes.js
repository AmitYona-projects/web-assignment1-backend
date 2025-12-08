import { Router } from "express";
import CommentController from "../controllers/commentController.js";

const commentsRouter = Router();
const commentController = new CommentController();

commentsRouter.post("/", (req, res) => commentController.createComment(req, res));
commentsRouter.get("/", (req, res) => commentController.getAllComments(req, res));
commentsRouter.get("/post/:postId", (req, res) => commentController.getCommentsByPostId(req, res));
commentsRouter.get("/:id", (req, res) => commentController.getCommentById(req, res));
commentsRouter.put("/:id", (req, res) => commentController.updateComment(req, res));
commentsRouter.delete("/:id", (req, res) => commentController.deleteComment(req, res));

export default commentsRouter;