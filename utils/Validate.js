/** @library import  */
const Validator = require('validatorjs');
const expressValidator = require('express-validator');
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
}

// validation.passes(); // true
// validation.fails(); // false

module.exports = new Validate();