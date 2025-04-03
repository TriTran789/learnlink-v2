import { Router } from "express";
import { createTeacher } from "../controllers/teacher.controller";
import { checkRole } from "../middlewares/checkRole";
import { createTeacherValidator } from "../validators/teacher.validator";

const router = Router();

router.post(
  "/create",
  checkRole(["root"]),
  createTeacherValidator,
  createTeacher
);

export default router;
