import express from 'express'
import {launchingAttack} from "../controllers/attackController";


const router = express.Router()

router.post("/attack", launchingAttack )



export default router;