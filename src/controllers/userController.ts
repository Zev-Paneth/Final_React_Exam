import asyncHandler from "express-async-handler";
import {Request, Response} from 'express'
import bcrypt from 'bcrypt';
import {User} from '../models/userModel.js'
import dotenv from 'dotenv';
import {AuthenticatedRequest, IUser} from "../interfaces/interfaces";
import accessToken from '../services/tokens'
import bringOrg from '../services/organizationsService.js'

dotenv.config();

export const registerUser = asyncHandler(async (req: Request, res: Response) => {

    const {username, password, organization} = req.body;

    if (!username || !password || !organization) {
        res.status(400);
        throw new Error("Username, password, and organization fields are required");
    }


    const userNotAvailable = await User.findOne({username});
    if (userNotAvailable) {
        res.status(400);
        throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const usersOrg = bringOrg(organization)
    const user : IUser = await User.create({
        username,
        password: hashedPassword,
        organization: usersOrg
    })

    if (user) {
        accessToken(user)
        res.status(201).json({
            accessToken
        });
    } else {
        res.status(400);
        throw new Error("user has not created");
    }

})

export const loginUser = asyncHandler(async (req: Request, res: Response) => {
    const {username, password} = req.body;
    if (!username || !password) {
        res.status(400);
        throw new Error("Username and password is required");
    }

    const user : IUser | null = await User.findOne({username});

    if (!user) {
        res.status(401);
        throw new Error("User does not exist");
    }

    const validatedPassword = async () => {
        if (user.password != null) {
           return await bcrypt.compare(password, user.password);
        }
        else {
            res.status(400);
            throw new Error("Passwords don't match");
        }
    }

    if (await validatedPassword()) {
        accessToken(user);
        res.status(200).json({
            title: 'Login Successfully',
            accessToken,
        })
    } else {
        res.status(401);
        throw new Error("InCorrect password");
    }
})

export const currentUser = async (req: AuthenticatedRequest, res: Response) => {
    try {
        res.json(req.user)
    } catch (err) {
        res.status(400)
        throw new Error('the vote is in problem')
    }
};