import constants from "../constants.js";
import { Request, Response, NextFunction } from 'express'

export const errorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const statusCode = res.statusCode ? res.statusCode : 500;

    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            return res.status(statusCode).json({
                title: 'validation error',
                message: err.message,
                stackTrace: err.stack,
            });
        case constants.NOT_FOUND:
            return res.status(statusCode).json({
                title: 'not found',
                message: err.message,
                stackTrace: err.stack,
            });
        case constants.UNAUTHORIZED:
            return res.status(statusCode).json({
                title: 'unauthorized',
                message: err.message,
                stackTrace: err.stack,
            });
        case constants.FORBIDDEN:
            return res.status(statusCode).json({
                title: 'forbidden',
                message: err.message,
                stackTrace: err.stack,
            });
        case constants.SERVER_ERROR:
            return res.status(statusCode).json({
                title: 'server error',
                message: err.message,
                stackTrace: err.stack,
            });
        default:
            return res.status(statusCode).json({
                message: err.message,
                stackTrace: err.stack,
            });
    }
};