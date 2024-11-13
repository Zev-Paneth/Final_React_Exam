import {organizations} from "../data/organizations";
import {IOrganization, OrganizationEnum} from "../interfaces/interfaces";

export default (organization: OrganizationEnum) => {
    return organizations.find((org: IOrganization) => org.name === organization)
}