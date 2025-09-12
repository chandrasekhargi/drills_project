import {connectDB} from "./db.js";
import Drill from "./models/Drill.js";
import mongoose from "mongoose";

export async function seed() {
    await connectDB(); // Connect to MongoDB once

    const c = await Drill.countDocuments();
    if (c > 0) return;

    await Drill.insertMany([
    {
        title: "Basics",
        difficulty: "Easy",
        questions: [
        "What is a variable?",
        "How to define function in Python?",
        "What is HTML?",
        "Name a link tag",
        "What is CSS?",
        ],
        },
    {
      title: "DOM",
      difficulty: "Medium",
      questions: [
        "What is DOM?",
        "What is querySelector?",
        "What is an event?",
        "How to change text?",
        "What is a callback?",
      ],
    },
  ]);

  mongoose.disconnect(); // Disconnect after seeding
  console.log("Seeded successfully!");
}

//Run the seeding
await seed();

