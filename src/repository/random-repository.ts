import { db } from "../database/database-connection";

export async function getRandom(id) {
    const result = await db.query(`SELECT * FROM people WHERE id=$1`, [id])
    return result.rows
}

export async function getLength() {
    const result = await db.query(`SELECT * FROM people`)
    return result.rows.length
}