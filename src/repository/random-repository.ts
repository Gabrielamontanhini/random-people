import { RandomPerson } from "../protocols/index";
import { db } from "../database/database-connection";

export async function getPersonByOrdenation(ordenation: number): Promise<RandomPerson[]> {
    const result = await db.query<RandomPerson>(`SELECT * FROM people OFFSET $1 LIMIT 1`, [ordenation - 1]);
    return result.rows;
}

export async function getLength(): Promise<number> {
    const result = await db.query<RandomPerson>(`SELECT * FROM people`);
    return result.rows.length;
}