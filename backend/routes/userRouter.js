import { Router } from "express";
import * as authUser from "../controllers/auth.js";
import verifyToken from "../middlewares/verifyToken.js";

const userRouter = Router();

userRouter.post("/login", authUser.login);
userRouter.get("/me", verifyToken, authUser.getUser);

userRouter.post("/register", authUser.signUp);
userRouter.post("/logout", verifyToken, authUser.logout);

export default userRouter;
