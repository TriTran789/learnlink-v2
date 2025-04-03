import { Router } from "express";
import { refreshToken, signIn, signOut } from "../controllers/auth.controller";
import { signInValidator } from "../validators/auth.validator";

const router = Router();

router.post("/sign-in", signInValidator, signIn);
router.post("/sign-out", signOut);
router.post("/refresh-token", refreshToken);

export default router;
