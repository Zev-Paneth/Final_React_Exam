import {IUser, OrganizationEnum} from "../interfaces/interfaces";
import {User} from "../models/userModel";

export  const bringOrganizationUnderAttacks = async (area: string): Promise<IUser[]> => {
    let warningArea;
    switch (area.toLowerCase()) {
        case 'north':
            warningArea = OrganizationEnum.IDFNorth;
            break;
        case 'west':
            warningArea = OrganizationEnum.IDFWestBank
            break;
        case 'south':
            warningArea = OrganizationEnum.IDFSouth;
            break;
        case 'center':
            warningArea = OrganizationEnum.IDFCenter;
            break;
        default:
            return Promise.reject(new Error(`Unable to find organization with area '${area}'`));
    }

    return await User.find({
        "organization.name": warningArea
    }).exec()
}
