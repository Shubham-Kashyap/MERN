module.exports = {


    /** @library imports */
    jwt: require('jsonwebtoken'),
    chalk: require('chalk'),
    env: require('dotenv').config(),
    validator: require('../utils/Validate'),
    dotenv: require('dotenv').config(),
    mysql2: require('mysql2'),
    sequelize: require('sequelize'),
    express_validator: require('express-validator'),

    /** @library imports custom*/
    routes: {
        admin_routes: require('../routes/admin_routes'),
        api_routes: require('../routes/api_routes'),
        web_routes: require('../routes/web_routes'),
    }


}