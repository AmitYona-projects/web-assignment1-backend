import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    sender: { type: mongoose.Schema.Types.ObjectId, required: true },
  },
  { timestamps: true }
);

const PostModel = mongoose.model("post", PostSchema);

export default PostModel;
