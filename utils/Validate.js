/** @library import  */
const Validator = require('validatorjs');
const { body, check, validationResult } = require('express-validator');
/** @library import */


class Validate {
    async validateRequest(request_data, rules, custom_error_messages = {}, set_attribute_name = {}) {

        var val = new Validator(request_data.body, rules, custom_error_messages)
        if (val.fails()) {
            // console.log(val.errors.get())

            throw new Error(val.errors.first('email'));
        }
        return request_data;
    }

    async unique(data, rules) {

    }

    async exist(data, rules) {

    }
    async requiredValidation(data, rules = []) {
        for (let param of data) {
            console.log(param)
        }
    }
    checkValidate = (req, res, next) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                console.log(errors)
                return res.status(422).json({
                    status: false,
                    message: errors.array()[0].msg,
                    response: []
                })
            }
            next();
        }
        catch (error) {
            return res.status(404).json({
                status: false,
                message: error.message
            })
        }
    }

    validationRules = (method) => {
        // console.log(method)
        switch (method) {
            case 'signup': {
                return [
                    check('name', 'Name field is required').notEmpty().bail(),
                    check('email')
                        .notEmpty().withMessage('Email field is required').bail(),
                    check('phone_no').isNumeric().withMessage("Phone number must be numeric").bail()
                ]
            }
            default: {
                return [];
            }
        }
    }

    validateRequest = (method) => [
        this.validationRules(method),
        this.checkValidate

    ]
}

const object = new Validate();

module.exports = {
    validateRequest: () => object.validateRequest('signup')
}