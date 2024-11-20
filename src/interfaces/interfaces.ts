import {Model, Schema} from 'mongoose';
import { Request } from 'express';

export enum OrganizationEnum {
    IDFNorth = 'IDF - North',
    IDFSouth = 'IDF - South',
    IDFCenter = 'IDF - Center',
    IDFWestBank = 'IDF - West Bank',
    HEZBOLLAH = 'Hezbollah',
    HAMAS = 'Hamas',
    IRGC = 'IRGC',
    HOUTHIS = 'Houthis'
}

export enum ResourceEnum {
    IRONDOM = 'Iron Dome',
    DS = "David's Sling",
    PATRIOT = 'Patriot',
    ARROW = 'Arrow',
    F5 = 'Fajr-5',
    Z2 = 'Zelzal-2',
    QASSAM = 'Qassam',
    M75 = 'M-75',
    S3 = 'Shahab-3',
    F110 = 'Fateh-110',
    B1 = 'Badr-1',
    Q1 = 'Quds-1'
}

export interface IResource {
    name: ResourceEnum;
    amount: number;
}

export interface IOrganization {
    name: OrganizationEnum;
    resources: IResource[];
    budget?: number;
}

export interface IUser {
    _id?: Schema.Types.ObjectId;
    username: string | null;
    password: string | null;
    organization?: IOrganization | string | null;
}

export interface UserModel extends Model<IUser> {}

export interface AuthenticatedRequest extends Request {
    user?: {
        username: string;
        organizations: IOrganization[];
    };
}