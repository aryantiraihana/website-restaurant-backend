// berisi struktur tabel bagaimana data akan disimpan ke database

import {Sequelize} from "sequelize";
import db from "../config/Database.js";
import Product from "./ProductModel.js";

// fungsi dari sequelize
const {DataTypes} = Sequelize;

// buat struktur tabel
// parameter kedua : ada fieldnya
// parameter ketiga : terdapat opsi
const Transaksi = db.define('transaksis', {
    products_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        onDelete: 'Cascade',
        onUpdate: 'Cascade',
        references: {
          model: 'Product',
          key: 'id'
        }
    },
    order_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    quantity: {
        type: DataTypes.INTEGER,
        defaultValue: 1
    }
}, {
    freezeTableName: true
});

Transaksi.belongsTo(Product, { foreignKey: 'products_id' });
Product.hasMany(Transaksi, { foreignKey: 'products_id' });

export default Transaksi;

// function untuk men-generate table transaksi jika table transaksi tdk terdapat di db
(async() => {
    await db.sync();
})();
