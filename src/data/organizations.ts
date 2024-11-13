import {IOrganization, OrganizationEnum, ResourceEnum} from "../interfaces/interfaces";

export const organizations :IOrganization[] =  [
  {
    name: OrganizationEnum.IDFNorth,
    resources: [
      {
        name: ResourceEnum.IRONDOM,
        amount: 25
      },
      {
        name: ResourceEnum.DS,
        amount: 15
      }
    ],
    budget: 8000000
  },
  {
    name: OrganizationEnum.IDFSouth,
    resources: [
      {
        name: ResourceEnum.IRONDOM,
        amount: 30
      },
      {
        name: ResourceEnum.PATRIOT,
        amount: 20
      }
    ],
    budget: 9000000
  },
  {
    name: OrganizationEnum.IDFCenter,
    resources: [
      {
        name: ResourceEnum.IRONDOM,
        amount: 40
      },
      {
        name: ResourceEnum.ARROW,
        amount: 10
      }
    ],
    budget: 10000000
  },
  {
    name: OrganizationEnum.IDFWestBank,
    resources: [
      {
        name: ResourceEnum.IRONDOM,
        amount: 10
      }
    ],
    budget: 7000000
  },
  {
    name: OrganizationEnum.HEZBOLLAH,
    resources: [
      {
        name: ResourceEnum.F5,
        amount: 30
      },
      {
        name: ResourceEnum.Z2,
        amount: 20
      }
    ],
    budget: 3000000
  },
  {
    name: OrganizationEnum.HAMAS,
    resources: [
      {
        name: ResourceEnum.QASSAM,
        amount: 50
      },
      {
        name: ResourceEnum.M75,
        amount: 30
      }
    ],
    budget: 2500000
  },
  {
    name: OrganizationEnum.IRGC,
    resources: [
      {
        name: ResourceEnum.S3,
        amount: 15
      },
      {
        name: ResourceEnum.F110,
        amount: 25
      }
    ],
    budget: 4000000
  },
  {
    name: OrganizationEnum.HOUTHIS,
    resources: [
      {
        name: ResourceEnum.B1,
        amount: 20
      },
      {
        name: ResourceEnum.Q1,
        amount: 15
      }
    ],
    budget: 2000000
  }
]