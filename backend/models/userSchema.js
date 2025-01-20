import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  data: {
    username: {
      type: String,
      required: [true, "username is required"],
      trim: true,
      unique: true,
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
      select: false,
      minlength: 6,
    },
    cards: [
      {
        card_no: {
          type: String,
        },
        franchise: {
          type: String,
          default: "yugioh",
        },
      },
    ],
  },
});

export default mongoose.model("User", userSchema);
