import mongoose, { Types } from "mongoose";

const FollowSchema = new mongoose.Schema(
  {
    followerId: { type: Types.ObjectId, required: true },
    followingId: { type: Types.ObjectId, required: true },
  },
  { _id: false, timestamps: false },
);

export const Follow = mongoose.model("Follow", FollowSchema);
