const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'database-1-instance-1.cqhu46i60ot2.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: 'YOUR_ACTUAL_AURORA_PASSWORD',
    database: 'webappdb'
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
