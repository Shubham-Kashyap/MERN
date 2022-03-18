/** @library imports */
const response = require('../utils/Response');



const auth = async (req, res, next) => {
    const token = req.headers["authorization"];
    if (!token) {
        return response.returnErrorResponse(res, "Unauthorized access !");
    }
    next();
}

module.exports = auth;