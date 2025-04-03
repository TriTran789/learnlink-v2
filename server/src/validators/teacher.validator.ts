import { body } from "express-validator";
import { validate } from "../middlewares/validate";

export const createTeacherValidator = [
  body("fullName")
    .notEmpty()
    .withMessage("Full name is required")
    .isString()
    .withMessage("Full name must be a string")
    .isLength({ min: 3 })
    .withMessage("Full name must be at least 3 characters long"),
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Email must be a valid email address"),
  body("phone")
    .notEmpty()
    .withMessage("Phone number is required")
    .isString()
    .withMessage("Phone number must be a string")
    .isLength({ min: 10, max: 15 })
    .withMessage("Phone number must be between 10 and 15 characters long"),
  body("level")
    .notEmpty()
    .withMessage("Level is required")
    .isIn(["master", "doctor", "professor"])
    .withMessage(
      "Level must be one of the following: master, doctor, professor"
    ),
  validate,
];
