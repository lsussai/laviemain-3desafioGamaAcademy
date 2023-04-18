const Sequelize = require("sequelize")

const config = {
    username: "root", 
    password: "Nic22@",
    database: "laviemain",
    host: "localhost",
    dialect: "mysql",
    port: 3306,
}
/*
const DB_NAME = "laviemain";
const DB_USER = "root";
const DB_PASSWORD = "Nic22@";
const DB_CONFIG = {
    dialect: "mysql",
    host: "localhost",
    port: 3306,
}
*/

try{
    db = new Sequelize(config);
} catch (error) {
    console.log(error);
}

async function hasConnection() {
    try {
        await db.authenticate();
        console.log("Banco de dados conectados!");
    } catch(error){
            console.error("erro ao tentar se conectar com o banco de dados")
    }
}

Object.assign(db, {
    hasConnection,
});

module.exports = db;

