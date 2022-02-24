/**
 * @Library imports
 */
const Response = require('../../utils/Response');
class UserController {
    async userSignup(req, res) {
        res.send('ghfd')
        Response.returnSuccessResponse(res, "Hello");
    }
}

module.exports = new UserController();