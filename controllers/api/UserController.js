/**
 * @Library imports
 */
const Response = require('../../utils/Response');
const chalk = require('chalk');




class UserController {
    async userSignup(req, res) {
        console.log()
        Response.returnSuccessResponse(res, 'hello this is signup api');
    }
    async fetchProfile(req, res) {
        Response.returnSuccessResponse(res, 'hello this is fetch profile api');
    }
    async updateProfile() {
        Response.returnSuccessResponse(res, 'hello this is update profile api');
    }
}

module.exports = new UserController();