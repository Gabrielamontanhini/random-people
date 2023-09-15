import { Request, Response } from "express"; 
import httpStatus from "http-status"
import { getRandomPerson } from "../services/random-service";

export async function getPerson(req: Request, res: Response){
    try{
        const random = await getRandomPerson()
        return res.send(random)
    }catch (error) {
        res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}