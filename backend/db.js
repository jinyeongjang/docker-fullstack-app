// backend/db.js

const mysql = require('mysql');
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'mysql',
    user: 'root',
    password: '12341234!@',
    database: 'myapp',
});

exports.pool = pool;
