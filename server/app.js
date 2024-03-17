const express = require("express");
const helmet = require("helmet");
const app = express();
app.use(express.json());

app.use(helmet());
app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://internvilla.vercel.app/"
  );
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

const authRouter = require("./routes/authRoutes");
const userRouter = require("./routes/userRoutes");
const jobRouter = require("./routes/jobRoutes");
const authMiddleware = require("./middlewares/authMiddleware");

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", authMiddleware, userRouter);
app.use("/api/v1/jobs", authMiddleware, jobRouter);

app.all("*", (req, res) => {
  res.status(404).json("Hi your api is working.");
});

module.exports = app;
