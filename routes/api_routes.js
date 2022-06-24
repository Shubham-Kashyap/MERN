const express = require('express');
const api = express.Router();
const auth = require('../middlewares/Auth');
const validate = require('../utils/Validate');
const { check, validationResult } = require('express-validator')
// @ import controllers 
const UserController = require('../controllers/api/UserController');
const {
    validateRequest,
} = require('../utils/Validate');


// UserController routes 

// console.log(validationRules('signup'))
api.all('*', (req, res, next) => {

    let method = req.originalUrl.split('/').pop();

    api.all('*', validateRequest(), (req, res, next) => {

        /** @Define_Your_Routes_Here */
        api.post('/signup', UserController.userSignup)
        api.post('/fetch-profile', auth, UserController.fetchProfile);
        api.post('/update-profile', auth, UserController.updateProfile);
        next();
    })

    next();
});





const returnValidationRules = () => {
    return [
        check('name').not().isEmpty()
    ];
}
const returnValidationResults = (req, res, next) => {
    const errors = validationResult(req);
    // console.log(errors)
    if (!errors.isEmpty()) {
        res.json({
            status: false,
            errors: errors
        })
    }
    next();
}

module.exports = api;