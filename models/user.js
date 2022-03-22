let { sequelize, Sequelize, Model, DataTypes } = require("../config/db");
// const bcrypt = require("bcrypt");


const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    user_role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "user",
    },

    address: {
        type: DataTypes.TEXT('long'),
        allowNull: true,
    },
    lat: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    lng: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    access_token: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    phone_no: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    remember_token: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    device_type: {
        type: DataTypes.ENUM,
        values: ["i", "a"],
        defaultValue: null,
        allowNull: true,
    },
    device_token: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    is_email_verified: {
        type: DataTypes.ENUM,
        values: ["1", "0"],
        defaultValue: "0",
    },
    social_login_id: {
        type: DataTypes.ENUM,
        values: ["facebook", "google", "linkdin", "github", 'apple', 'twitter'],
        defaultValue: null,
    },
    social_login_type: {
        type: DataTypes.TEXT('long'),
        defaultValue: null,
    },
    status: {
        type: DataTypes.ENUM,
        values: ["1", "0"],
        defaultValue: "1",
    },
    auth_token: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    created_at: {
        type: Sequelize.DATE(),
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP()'),
    },
    updated_at: {
        type: Sequelize.DATE(),
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(3)'),
    },

}, {
    tableName: "users",
    timestamps: false
}).sync({
    // alter: true,
    // force: true,

});

// sequelize.sync().then(() => {

// });


module.exports = User;