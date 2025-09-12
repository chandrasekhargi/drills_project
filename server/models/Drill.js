import mongoose from "mongoose";

const s = new mongoose.Schema({
  title: String,
  difficulty: String,
  questions: [String]
});

const Drill = mongoose.model('Drill', s);

export default Drill;
