import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});
// a schema is an object that will define the structure of our data

const UserModel = mongoose.model("", UserSchema);
