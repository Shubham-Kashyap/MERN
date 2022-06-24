/**
 * @Library imports
 */
// const User = require("../../model/user");
// const User = require('../../models/user')
const Response = require("../../utils/Response");
const { chalk, validator } = require('../../exports/library');
const { generateToken } = require('../../services/auth');
// const Validator = require('validatorjs');


class UserController {

    /** @signup_api */
    async userSignup(req, res) {
        try {
            await validator.validateRequest(req, {
                name: 'required',
                email: "required|email",
                phone_no: "required|numeric"
            }, {
                'required.email': 'The :attribute field is required now back off'
            });
            // await validator.requiredValidation(req.body, [email, name])
            Response.returnSuccessResponse(res, 'hello this is signup api');
        } catch (error) {
            Response.returnErrorResponse(res, error.message)
        }

    }

    /** @fetch_profile api */
    async fetchProfile(req, res) {
        console.log()
        Response.returnSuccessResponse(res, 'hello this is fetch profile api');
    }

    /** @update_profile */
    async updateProfile(req, res) {
        Response.returnSuccessResponse(res, 'hello this is update profile api');
    }
}

module.exports = new UserController();