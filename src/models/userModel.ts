import {model, Schema} from "mongoose";
import {
    IUser,
    UserModel,
    IOrganization,
    OrganizationEnum,
    IResource,
    ResourceEnum
} from "../interfaces/interfaces";

const resourceSchema = new Schema<IResource>({
    name: {
        type: String,
        enum: ResourceEnum,
        required: true
    },
    amount: {
        type: Number
    }
}, {_id: false});

const organizationSchema = new Schema<IOrganization>({
    name: {
        type: String,
        enum: Object.values(OrganizationEnum),
        required: true
    },
    resources: {
        type: [resourceSchema],
        default: []
    },
    budget: {
        type: Number,
        required: false,
        min: 0
    }
});

const userSchema = new Schema<IUser>({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    organizations: organizationSchema
}, {
    timestamps: true
});

export const User = model<IUser, UserModel>('User', userSchema);
export const Organization = model<IOrganization>('Organization', organizationSchema);
