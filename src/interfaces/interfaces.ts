import mongoose from "mongoose";

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

export interface IUser extends Document {
    id?: mongoose.Schema.Types.ObjectId;
    username: string | null | undefined;
    password?: string;
    organization: OrganizationEnum
}


export interface AuthenticatedRequest extends Request {
    user?: {
        username: string;
        organization: OrganizationEnum;
    };
}