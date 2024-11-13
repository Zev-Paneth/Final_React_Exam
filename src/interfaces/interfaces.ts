import {Document, Model, Types} from 'mongoose';

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


export interface IUser {
    _id?: Types.ObjectId;
    username: string | null | undefined;
    password?: string;
    organization: OrganizationEnum;
    __v?: number;
}


export interface UserModel extends Model<IUser, {}> {}

export interface AuthenticatedRequest extends Request {
    user?: {
        username: string;
        organization: OrganizationEnum;
    };
}