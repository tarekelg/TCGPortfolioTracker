import mongoose from "mongoose";

const portfolioSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
  },
  owner: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  franchise: {
    type: String,
    default: "yugioh",
  },
  cards: [String],
});

export default mongoose.model("Portfolio", portfolioSchema);
