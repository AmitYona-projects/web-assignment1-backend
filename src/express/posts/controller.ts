import { Request, Response } from "express";
import { PostManager } from "./manager";

export class PostController {
    static getAllPosts = async (_req: Request, res: Response) => {
        res.json(await PostManager.getAllPosts());
    };

    static getPostById = async (req: Request, res: Response) => {
        res.json(await PostManager.getPostById(req.params.id));
    };

    static getPostBySenderId = async (req: Request, res: Response) => {
        res.json(await PostManager.getPostBySenderId(req.query?.senderId as string));
    };

    static createPost = async (req: Request, res: Response) => {
        res.json(await PostManager.createPost(req.body));
    };

    static updatePost = async (req: Request, res: Response) => {
        res.json(await PostManager.updatePostById(req.params.id, req.body));
    };

    static deletePostById = async (req: Request, res: Response) => {
        res.json(await PostManager.deletePostById(req.params.id));
    };
}