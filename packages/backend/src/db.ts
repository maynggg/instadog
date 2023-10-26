import { MONGO_URI } from "./config";
import mongoose from "mongoose";

export const initDb = async () => mongoose.connect(MONGO_URI);
