import { model, Schema } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    enum: ["root", "student", "teacher"],
  },
  profileId: {
    type: String,
    required: true,
  },
});

const User = model("User", userSchema);

export default User;
