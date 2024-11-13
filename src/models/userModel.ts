import mongoose from "mongoose";
import {OrganizationEnum} from "../interfaces/interfaces";

const userSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    organization: {type: OrganizationEnum, required: true},
}, {
    timestamps: true
})

export default mongoose.model('User', userSchema);

