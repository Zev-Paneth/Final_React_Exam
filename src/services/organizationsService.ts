import {organizations} from "../data/organizations";
import {IOrganization, OrganizationEnum} from "../interfaces/interfaces";

export default async (organization: OrganizationEnum) => {
    const allowedOrganizations = [
        OrganizationEnum.HOUTHIS,
        OrganizationEnum.IRGC,
        OrganizationEnum.HAMAS,
        OrganizationEnum.HEZBOLLAH,
        OrganizationEnum.IDFCenter,
        OrganizationEnum.IDFWestBank,
        OrganizationEnum.IDFSouth,
        OrganizationEnum.IDFNorth
    ];

    if (allowedOrganizations.includes(organization)) {
        return organizations.find((org: IOrganization) => org.name === organization);
    } else {
        throw new Error(`Unable to find organization with name '${organization}'`);
    }
};
