import jwt from "jsonwebtoken";
import {IUser} from "../interfaces/interfaces";

export default (user: IUser) => {
    jwt.sign(
        {
            user: {
                username: user.username,
                organization: user.organization
            },
        },
        process.env.ACCESS_TOKEN_SECRET || "123963852741285465265",
        {
            expiresIn: "15m",
        }
    )
}

