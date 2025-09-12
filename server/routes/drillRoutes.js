import express from "express";

const router = express.Router();

// Example GET all drills
router.get("/", (req, res) => {
  res.json({ message: "All drills fetched successfully" });
});

// Example GET one drill by ID
router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.json({ message: `Drill with ID ${id}` });
});

export default router;
