import {NextFunction, Response} from 'express';
import jwt, {JwtPayload} from 'jsonwebtoken';
import dotenv from 'dotenv';
import {AuthenticatedRequest} from "../interfaces/interfaces";

dotenv.config();

const validateToken = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    try {
        const authHeader = req.headers.authorization;
        if (authHeader && authHeader.startsWith("Bearer ")) {
            const token = authHeader.split(" ")[1];
            jwt.verify(token, process.env.ACCESS_TOKEN_SECRET || "", (error, decoded) => {
                if (error) {
                    return res.status(401).json({message: "Unauthorized"});
                }
                if (decoded && typeof decoded !== "string") {
                    req.user = decoded.user;
                    next();
                } else {
                    res.status(401).json({message: "Invalid token payload"});
                }
            });
        } else {
            res.status(401).json({message: "Token missing or invalid"});
        }
    } catch (err) {
        res.status(500).json({error: err});
    }
};

export default validateToken;
