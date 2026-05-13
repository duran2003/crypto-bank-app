const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    return sequelize.define("Investment", {
        userid: {
            type: DataTypes.STRING,
            allowNull: false
        },
        bitcoin: {
            type: DataTypes.FLOAT,
            defaultValue: 0
        },
        ethereum: {
            type: DataTypes.FLOAT,
            defaultValue: 0
        },
        solana: {
            type: DataTypes.FLOAT,
            defaultValue: 0
        },
        dogecoin: {
            type: DataTypes.FLOAT,
            defaultValue: 0
        }
    });
};