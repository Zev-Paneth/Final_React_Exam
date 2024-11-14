import dotenv from 'dotenv'
import connectToDB from "./config/connectToDB.js";
import express from 'express'
import cors from 'cors'
import userRoutes from "./routes/userRoutes.js"
import {errorHandler} from "./middleware/errorHandler";



dotenv.config()

connectToDB()

const app = express()
app.use(express.json())

const port = process.env.PORT || 3000;
const origin = ["http://localhost:5173", "http://localhost:5175"]

app.use(cors({
    origin: "*",
    credentials: true
}))

app.use('/api/users', userRoutes)

app.use(errorHandler)


app.listen(port, ()=> console.log("Server running on port ", port))



