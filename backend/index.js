import express from "express";
import "./db/server.js";
import cors from "cors";
import userRouter from "./routes/userRouter.js";
import cookieParser from "cookie-parser";
const app = express();

// Use environment variable or default to port 3000
const port = process.env.PORT || 3000;

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());

app.use(cookieParser());
app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
