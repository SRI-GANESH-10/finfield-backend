import { Router } from "express";
import { signUp } from "./auth.controller";
import { validateSignUp } from "./auth.middleware";

const router = Router();

router.post('/signup' , validateSignUp, signUp);

export default router;