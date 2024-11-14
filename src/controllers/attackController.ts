import asyncHandler from "express-async-handler";
import {Request, Response} from 'express';
import {User} from '../models/userModel.js';
import dotenv from 'dotenv';
import {IUser} from "../interfaces/interfaces";
import {bringOrganizationUnderAttacks} from "../services/attackServices";

dotenv.config();


export const launchingAttack = asyncHandler(async (req: Request, res: Response) => {
    const {area, attackerName, resourceToUse} = req.body;

    if (!area || !attackerName || !resourceToUse) {
        res.status(400);
        throw new Error("Invalid attack parameters");
    }

    const attacker = await User.findOne({username: attackerName}).populate('organization');
    if (!attacker) {
        res.status(404);
        throw new Error("Attacker not found");
    }

    if (!attacker.organization || typeof attacker.organization === 'string') {
        res.status(400);
        throw new Error("Organization data not available");
    }

    const resource = attacker.organization.resources.find(r => r.name === resourceToUse);
    if (!resource) {
        res.status(400);
        throw new Error("Resource not found in the organization");
    }

    if (resource.amount < 1) {
        res.status(400);
        throw new Error("Insufficient resource amount");
    }

    resource.amount--;

    await attacker.save();

    const usersUnderAttack: IUser[] = await bringOrganizationUnderAttacks(area);
    res.status(200).json({
        usersUnderAttack,
        attackerName: attacker.username,
        remainingAmount: resource.amount
    });
});
