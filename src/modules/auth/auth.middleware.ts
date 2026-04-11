import { NextFunction, Request , Response } from "express";
import { signUpSchema } from "./auth.type";
import { AppError } from "@/utils/error.util";

export const validateSignUp = (req: Request, res: Response, next: NextFunction): void => {
    const result = signUpSchema.safeParse(req.body);
    if (!result.success) {
        return next(new AppError(result.error.issues[0].message, 422));
    }
    req.body = result.data;
    next();
};  