import CommentModel from "../models/commentModel";

class CommentController {
    constructor() {
        this.commentModel = CommentModel;
    }

    async getAllComments(_req, res) {
        try {
            const posts = await this.commentModel.find();
            res.status(200).json(posts);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getCommentById(req, res) {
        try {
            const { id } = req.params;

            if (!id) {
                return res.status(400).json({ message: "comment ID is required" });
            }

            const comment = await this.commentModel.findById(id);
            res.status(200).json(comment);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getCommentsByPostId(req, res) {
        try {
            const { postId } = req.params;

            if (!postId) {
                return res.status(400).json({ message: "post ID is required" });
            }

            const comments = await this.commentModel.find({ postId: postId });
            res.status(200).json(comments);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async createComment(req, res) {
        try {
            const comment = await this.commentModel.create(req.body);
            res.status(201).json(comment);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async updateComment(req, res) {
        try {
            const { id } = req.params;
            const updateData = req.body;

            if (!id) {
                return res.status(400).json({ message: "Comment ID is required" });
            }

            const comment = await this.commentModel.findByIdAndUpdate(id, updateData, {
                new: true,
            });
            res.status(200).json(comment);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async deleteComment(req, res) {
        try {
            const { id } = req.params;

            if (!id) {
                return res.status(400).json({ message: "comment ID is required" });
            }

            await this.commentModel.findByIdAndDelete(id);
            res.status(200).json({ message: `Comment: ${id},  deleted successfully` });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

}

export default CommentController;