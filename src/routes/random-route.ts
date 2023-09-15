import { Router } from "express"
import { getPerson } from "../controllers/random-controllers"

const randomRoute = Router()

randomRoute.get("/person", getPerson)

export default randomRoute