import { body } from "express-validator";
import { validate } from "../middlewares/validate";

export const signInValidator = [
  body("email")
    .isEmail()
    .withMessage("Invalid credentials")
    .notEmpty()
    .withMessage("Invalid credentials"),
  body("password").notEmpty().withMessage("Invalid credentials"),
  validate,
];
