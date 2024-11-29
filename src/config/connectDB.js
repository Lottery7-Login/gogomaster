const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: '148.135.138.82',
    user: 'root',
    password: 'norman8484!',
    database: '91tiranga',
});

// const connection = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'u736549907_diuwin',
//     port:3308,
// });

export default connection;