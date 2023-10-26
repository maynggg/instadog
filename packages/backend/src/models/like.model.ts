import mongoose, { Types } from "mongoose";

const LikeSchema = new mongoose.Schema(
  {
    postId: { type: Types.ObjectId, required: true },
    userId: { type: Types.ObjectId, required: true },
  },
  { _id: false, timestamps: false },
);

export const Like = mongoose.model("Like", LikeSchema);
