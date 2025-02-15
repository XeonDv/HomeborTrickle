const { query } = require('../config/db');
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 10;

async function queryDatabase(table, conditions = {}) {
    try {
        const whereClause = Object.keys(conditions).length > 0 
            ? `WHERE ${Object.keys(conditions).map(key => `${key} = ?`).join(' AND ')}`
            : '';
        const values = Object.values(conditions);
        const sql = `SELECT * FROM ${table} ${whereClause}`;
        return await query(sql, values);
    } catch (error) {
        reportError(error);
        throw error;
    }
}

async function insertData(table, data) {
    try {
        const columns = Object.keys(data).join(', ');
        const placeholders = Object.keys(data).map(() => '?').join(', ');
        const values = Object.values(data);
        const sql = `INSERT INTO ${table} (${columns}) VALUES (${placeholders})`;
        const result = await query(sql, values);
        return { ...data, id: result.insertId };
    } catch (error) {
        reportError(error);
        throw error;
    }
}

async function updateData(table, id, data) {
    try {
        const setClause = Object.keys(data).map(key => `${key} = ?`).join(', ');
        const values = [...Object.values(data), id];
        const sql = `UPDATE ${table} SET ${setClause} WHERE id = ?`;
        await query(sql, values);
        return { id, ...data };
    } catch (error) {
        reportError(error);
        throw error;
    }
}

async function deleteData(table, id) {
    try {
        const sql = `DELETE FROM ${table} WHERE id = ?`;
        await query(sql, [id]);
        return true;
    } catch (error) {
        reportError(error);
        throw error;
    }
}

async function hashPassword(password) {
    return await bcrypt.hash(password, SALT_ROUNDS);
}

async function verifyPassword(password, hash) {
    return await bcrypt.compare(password, hash);
}
