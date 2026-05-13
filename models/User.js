const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    return sequelize.define("User", {
        userid: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        zipcode: {
            type: DataTypes.STRING
        },
        type: {
            type: DataTypes.STRING,
            defaultValue: "Customer"
        },
        walletAddress: {
            type: DataTypes.STRING
        }
    });
};
