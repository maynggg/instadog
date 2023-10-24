import { MONGO_URL } from "./config";
import mongoose from "mongoose";

export const initDb = async () => mongoose.connect(MONGO_URL);
