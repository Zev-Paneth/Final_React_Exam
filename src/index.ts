import dotenv from 'dotenv'
import connectToDB from "./config/connectToDB.js";
import express from 'express'
import cors from 'cors'
import userRoutes from "./routes/userRoutes.js"



dotenv.config()

connectToDB()

const app = express()
app.use(express.json())

const port = process.env.PORT || 3000;
const origin = "http://localhost:5173"

app.use(cors({
    origin: origin,
    credentials: true
}))

app.use('/api/users', userRoutes)

app.listen(port, ()=> console.log("Server running on port ", port))



