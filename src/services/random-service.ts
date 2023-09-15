import { getLength, getRandom } from "../repository/random-repository";

export async function getRandomPerson(){
    const length = await getLength()
    const randomId =  Math.floor(Math.random() * length) + 1
    return getRandom(randomId)
}