import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
    {
        content: { type: String, required: true },
        user: { type: mongoose.Schema.Types.ObjectId, required: true },
        postId: { type: mongoose.Schema.Types.ObjectId, ref: "post", required: true },
    },
    {
        timestamps: true
    }
);

const CommentModel = mongoose.model("comment", commentSchema);

export default CommentModel;