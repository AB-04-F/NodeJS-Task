const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('tbl_product', {
        //1.productId:
        productId: {
            autoIncrement: true,
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        //2.productName:
        productName: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        //3.qtyPerUnit:
        qtyPerUnit: {
            type: DataTypes.STRING(250),
            allowNull: false
        },
        //4.unitPrice:
        unitPrice: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        //5.unitInStock:
        unitInStock: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        //6.discontinued:
        discontinued: {
            type: DataTypes.TINYINT,
            allowNull: false,
            defaultValue: 0
        },
        //7.categoryId:
        categoryId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        created_date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.fn('current_timestamp')
        }
    }, {
        sequelize,
        tableName: 'tbl_product',
        timestamps: false,
        indexes: [{
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [
                { name: "productId" },
            ]
        }, ]
    });
};