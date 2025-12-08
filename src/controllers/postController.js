import PostModel from "../models/post.js";

class PostController {
  constructor() {
    this.postsModel = PostModel;
  }

  async getAllPosts(_req, res) {
    try {
      const posts = await this.postsModel.find();
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getPostById(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({ message: "Post ID is required" });
      }

      const post = await this.postsModel.findById(id);
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getPostsBySenderId(req, res) {
    try {
      const { senderId } = req.query;

      if (!senderId) {
        return res.status(400).json({ message: "Sender ID is required" });
      }

      const posts = await this.postsModel.find({ sender: senderId });
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async createPost(req, res) {
    try {
      const post = await this.postsModel.create(req.body);
      res.status(201).json(post);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async updatePost(req, res) {
    try {
      const { id } = req.params;
      const updateData = req.body;

      if (!id) {
        return res.status(400).json({ message: "Post ID is required" });
      }

      const post = await this.postsModel.findByIdAndUpdate(id, updateData, {
        new: true,
      });
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async deletePost(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({ message: "Post ID is required" });
      }

      await this.postsModel.findByIdAndDelete(id);
      res.status(200).json({ message: `Post (${id}) deleted successfully` });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

export default PostController;
