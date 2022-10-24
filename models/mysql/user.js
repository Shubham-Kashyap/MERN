let { sequelize, Sequelize, Model, DataTypes } = require("../../config/db");
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
    alter: true,
    // force: true,

});

// sequelize.sync().then(() => {

// });


// sequelize.sync().then(() => {
//     alter: true

// });

module.exports = User;