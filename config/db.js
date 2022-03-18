// const { env } = require('../exports/library');

const { Sequelize, Model, DataTypes } = require("sequelize");
const env = require("dotenv").config();
const { chalk } = require('../exports/library');

let sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: "mysql",
}
);

sequelize
    .authenticate()
    .then(() => {
        sequelize.sync();
        console.log(chalk.yellow.bold.inverse("Success databse connected!"));
    })
    .catch((err) => {
        console.log(err);
    });

module.exports = { sequelize, Sequelize, Model, DataTypes };