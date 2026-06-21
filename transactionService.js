const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

const getTransactions = () => {
    return new Promise((resolve, reject) => {
        connection.query(
            'SELECT * FROM transactions',
            (err, results) => {
                if (err) reject(err);
                else resolve(results);
            }
        );
    });
};

module.exports = {
    getTransactions
};
