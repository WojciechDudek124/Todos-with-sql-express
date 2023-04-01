const mysql = require('mysql2/promise');

    const pool = mysql.createPool({
        host: 'localhost',
        user: 'root',
        database: 'mega_todo',
        decimalNumbers: true,
        namedPlaceholders: true,
    });

module.exports = {
    pool,
};