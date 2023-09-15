import { Request, Response } from "express"; 
import httpStatus from "http-status"
import { getRandomPerson } from "../services/random-service";
import { RandomPerson } from "../protocols";

export async function getPerson(req: Request, res: Response){
    try{
        const random: RandomPerson = await getRandomPerson();

        return res.status(httpStatus.OK).send(random)
    }catch (error) {
        res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}