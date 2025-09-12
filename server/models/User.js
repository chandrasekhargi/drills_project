import mongoose from "mongoose";

const s = new mongoose.Schema({
  googleId: String,
  displayName: String,
  email: String,
});

const User = mongoose.model("User", s);

export default User;
