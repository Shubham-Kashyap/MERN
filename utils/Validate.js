/** @library import  */
const Validator = require('validatorjs');
/** @library import */


class Validate {
    async validateRequest(request_data, rules, custom_error_messages = {}, set_attribute_name = {}) {
        var val = new Validator(request_data, rules, custom_error_messages)
        if (val.fails()) {
            console.log(val.fails());
            throw new Error(val.errors.get());
        }
        return data;
    }

    async unique(data, rules) {

    }

    async exist(data, rules) {

    }
}

// validation.passes(); // true
// validation.fails(); // false

module.exports = new Validate();