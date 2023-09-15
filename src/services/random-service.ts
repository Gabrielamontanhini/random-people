import { RandomPerson } from "../protocols/index";
import { getLength, getPersonByOrdenation } from "../repository/random-repository";

export async function getRandomPerson(): Promise<RandomPerson> {
    const length: number = await getLength()

    const randomId: number =  Math.floor(Math.random() * length) + 1;

    const result: RandomPerson[] = await getPersonByOrdenation(randomId);

    const person: RandomPerson = result[0];
    
    return person;
}