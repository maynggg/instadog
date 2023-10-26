import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    userName: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    bio: { type: String },
    avatarUrl: { type: String },
  },
  { _id: true, timestamps: true },
);

export const User = mongoose.model("User", UserSchema);
