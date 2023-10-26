import mongoose, { Types } from "mongoose";

const CommentSchema = new mongoose.Schema(
  {
    postId: { type: Types.ObjectId, required: true },
    userId: { type: Types.ObjectId, required: true },
    text: { type: String, required: true },
  },
  { _id: true, timestamps: true },
);

export const Comment = mongoose.model("Comment", CommentSchema);
