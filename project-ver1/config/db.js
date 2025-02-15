const mysql = require('mysql2/promise');

const dbConfig = {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'homebor',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
};

const pool = mysql.createPool(dbConfig);

module.exports = {
    query: async (sql, params) => {
        const connection = await pool.getConnection();
        try {
            const [rows] = await connection.execute(sql, params);
            return rows;
        } finally {
            connection.release();
        }
    },
    close: async () => {
        await pool.end();
    }
};
