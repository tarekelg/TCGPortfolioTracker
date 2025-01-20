import User from "../models/userSchema.js";
import asyncHandler from "../utils/asyncHandler.js";
import ErrorResponse from "../utils/ErrorResponse.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signUp = asyncHandler(async (req, res, next) => {
  const { username, email, password } = req.body;

  //check if email already exists
  const existingEmail = await User.findOne({ email });

  if (existingEmail)
    throw new ErrorResponse("An account with this Email already exists", 409);

  // hash and salt password
  const hash = await bcrypt.hash(password, 10);

  const newUser = await User.create({
    data: {
      username,
      email,
      password: hash,
    },
  });

  if (newUser) console.log(newUser);

  const token = jwt.sign({ cid: newUser.id }, process.env.JWT_SECRET);
  res.cookie("token", token, {
    maxAge: 86400000,
    httpOnly: true,
    secure: true,
    sameSite: "None",
  });

  res.send({ status: "cool thing" });
});

export const login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  const existingUser = await User.findOne({ "data.email": email }).select(
    "+data.password"
  );

  if (!existingUser) throw new ErrorResponse("Email does not exist", 404);

  const match = await bcrypt.compare(password, existingUser.data.password);
  if (!match) throw new ErrorResponse("Password is incorrect", 401);
  // Passwort überprüfung
  const token = jwt.sign({ cid: existingUser._id }, process.env.JWT_SECRET, {
    expiresIn: "30m",
  });

  res.cookie("token", token, {
    maxAge: 86400000,
    httpOnly: true,
    secure: true,
    sameSite: "none",
  }); // 30mn
  res.send({ status: "success" });
});

export const getUser = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.cid);
  res.json(client);
});

export const logout = asyncHandler(async (req, res, next) => {
  res.clearCookie("token", {
    maxAge: 1800000,
    httpOnly: true,
    secure: true,
    sameSite: "none",
  });
  res.send({ status: "success" });
});
