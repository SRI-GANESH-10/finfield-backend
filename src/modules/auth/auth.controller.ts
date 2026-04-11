import * as authService from '../auth/auth.service';
import { Request, Response } from 'express';

export const signUp = async (req: Request, res: Response) => {
    try {
        const user = await authService.signUp(req.body);
        res.json({
            message: 'User created',
            data: user,
        });
    } catch (error) {
        console.log(error , "error-----")
        const message = error instanceof Error ? error.message : "Something went wrong"
        res.status(400).json({
            success: false,
            message: message
        });
    }
}