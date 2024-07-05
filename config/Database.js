import { Sequelize } from "sequelize";

const db = new Sequelize('crud_rumahmakan', 'root', '', {
    host: 'localhost',
    // db ms yang kita gunakan
    dialect: 'mysql'
});

export default db;