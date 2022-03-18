/**
 * @Library imports
 */
const User = require("../../model/user");
const Response = require("../../utils/Response");



class UserController {
    async userSignup(req, res) {
        console.log()
        Response.returnSuccessResponse(res, 'hello this is signup api');
    }
    async fetchProfile(req, res) {
        console.log()
        Response.returnSuccessResponse(res, 'hello this is fetch profile api');
    }
    async updateProfile() {
        Response.returnSuccessResponse(res, 'hello this is update profile api');
    }
}

module.exports = new UserController();