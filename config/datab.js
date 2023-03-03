const database = require('./database');

const Pool = require('pg').Pool;

const pool = new Pool({
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    port: 5432,
    database: "turtlegame"
});

module.exports = pool;