import { NextFunction, Request , Response } from "express";
import { loginSchema, signUpSchema } from "./auth.type";
import { AppError } from "../../utils/error.util";

export const validateSignUp = (req: Request, res: Response, next: NextFunction): void => {
    const result = signUpSchema.safeParse(req.body);
    if (!result.success) {
        return next(new AppError(result.error.issues[0].message, 422));
    }
    req.body = result.data;
    next();
};  

export const validateLogin = (req:Request , res:Response , next:NextFunction):void => {
    const result = loginSchema.safeParse(req.body);
    if(!result.success){
        return next(new AppError(result.error.issues[0].message , 422));
    }
    req.body = result.data;
    next();
}