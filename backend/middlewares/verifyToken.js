import jwt from "jsonwebtoken";
import asyncHandler from "../utils/asyncHandler.js";
import ErrorResponse from "../utils/ErrorResponse.js";

const verifyToken = asyncHandler(async (req, res, next) => {
  console.log(req.token);
  const token = req.cookie.token;

  if (!token) throw new ErrorResponse("please login", 401);

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  req.cid = decoded.cid;
  next();
});

export default verifyToken;
