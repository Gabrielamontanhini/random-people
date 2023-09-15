import { db } from "../database/database-connection";

export async function getRandom() {
    const result = await db.query(`SELECT * FROM people`)
    return result.rows
}