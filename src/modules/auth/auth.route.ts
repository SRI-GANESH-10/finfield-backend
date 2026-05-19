import { Router } from "express";
import { login, signUp } from "./auth.controller";
import { validateLogin, validateSignUp } from "./auth.middleware";

const router = Router();

router.post('/signup' , validateSignUp, signUp);
router.post('/login' , validateLogin,  login)

export default router;