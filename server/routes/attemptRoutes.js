import express from "express";

const router = express.Router();

// Example GET attempts
router.get("/", (req, res) => {
  res.json({ message: "Attempts API working" });
});

export default router;
