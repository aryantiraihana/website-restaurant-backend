// berisi struktur tabel bagaimana data akan disimpan ke database

import {Sequelize} from "sequelize";
import db from "../config/Database.js";

// fungsi dari sequelize
const {DataTypes} = Sequelize;

// buat struktur tabel
// parameter kedua : ada fieldnya
// parameter ketiga : terdapat opsi


const Product = db.define('products', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    freezeTableName: true
});

export default Product;

//function untuk men-generate table product jika table product tdk terdapat di db
(async() => {
    await db.sync();
})();