import mongoose, { Types } from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    userId: { type: Types.ObjectId, required: true },
    photoUrl: { type: String, required: true },
    caption: { type: String },
  },
  { _id: true, timestamps: true },
);

export const Post = mongoose.model("Post", PostSchema);
