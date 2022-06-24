const { body, check, validationResult } = require('express-validator');

const checkValidate = (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (errors) {
            console.log(errors)
            return res.status(422).json({
                status: false,
                message: errors.array()[0].msg
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

const validationRules = (method) => {
    // console.log(method)
    switch (method) {
        case 'signup': {
            return [
                check('name', 'name field is required').notEmpty().bail()
            ]
        }
        default: {
            return [];
        }
    }
}

const validateRequest = (method) => [
    validationRules(method),
    checkValidate

]


module.exports = {
    validateRequest: () => validateRequest('signup')
}