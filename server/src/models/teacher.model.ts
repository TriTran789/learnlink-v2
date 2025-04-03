import { model, Schema } from "mongoose";

const teacherSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    required: true,
    enum: ["master", "doctor", "professor"],
  },
  classes: {
    type: [String],
    required: false,
  },
});

const Teacher = model("Teacher", teacherSchema);

export default Teacher;
