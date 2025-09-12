import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import session from "express-session";
import passport from "passport";
import cookieParser from "cookie-parser";

import {connectDB} from "./db.js";
import authRouter from "./routes/auth.js";
import drillRouter from "./routes/drillRoutes.js";
import attemptRouter from "./routes/attemptRoutes.js";
import {seed} from "./seed.js";
import "./auth.js"; // passport setup

// console.log("Google Client ID:", process.env.GOOGLE_CLIENT_ID);
// console.log("Google Secret:", process.env.GOOGLE_CLIENT_SECRET);

const app = express();

// Connect to MongoDB
connectDB().then(() => {
  // optional: seed data after DB is connected
  seed();
});

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(
  session({
    secret: process.env.SESSION_SECRET || "keyboard cat",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/auth", authRouter);
app.use("/api/drills", drillRouter);
app.use("/api/attempts", attemptRouter);

app.get("/api/user", (req, res) => res.json({ user: req.user || null }));
app.get("/", (req, res) => res.send("ok"));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(` Server started on port ${PORT}`));


