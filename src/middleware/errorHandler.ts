import constants from "../constants.js";
import {Request, Response} from 'express'


export const errorHandler = (err: Error, req: Request, res: Response) => {
    const statusCode = res.statusCode ? res.statusCode : 500;

    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.status(statusCode).json({
                title: 'validation error',
                message: err.message,
                stackTrace: err.stack,
            })
            break;
        case constants.NOT_FOUND:
            res.status(statusCode).json({
                title: 'not found',
                message: err.message,
                stackTrace: err.stack,
            })
            break;
        case constants.UNAUTHORIZED:
            res.status(statusCode).json({
                title: 'unauthorized',
                message: err.message,
                stackTrace: err.stack,
            })
            break;
        case constants.FORBIDDEN:
            res.status(statusCode).json({
                title: 'forbidden',
                message: err.message,
                stackTrace: err.stack,
            })
            break;
        case constants.SERVER_ERROR:
            res.status(statusCode).json({
                title: 'server error',
                message: err.message,
                stackTrace: err.stack,
            })
            break;
        default:
            res.status(statusCode).json({
                message: err.message,
                stackTrace: err.stack,
            })
    }
}