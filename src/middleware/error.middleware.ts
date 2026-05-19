import { AppError } from '../utils/error.util';
import { Request, Response, NextFunction } from 'express';

export const errorMiddleware = (error: unknown, req: Request, res: Response, next: NextFunction): void => {
    if (error instanceof AppError) {
        res.status(error.statusCode).json({
            success: false,
            message: error.message,
        });
        return;
    }

    res.status(500).json({
        success: false,
        message: 'Something went wrong',
    });
};