//Arquivo de configuração do banco do dados

const mysql = require('mysql2/promise');


const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "senai",
    database: "Back"
});





module.exports = db;