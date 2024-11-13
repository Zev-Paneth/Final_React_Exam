import mongoose, {model, Schema} from "mongoose";
import {IUser, OrganizationEnum, UserModel} from "../interfaces/interfaces";

const userSchema = new Schema<IUser, UserModel>({
    username: { type: String },
    password: { type: String },
    organization: { type: String, enum: OrganizationEnum }
}, {
    timestamps: true
});

export default model<IUser, UserModel>('User', userSchema);
