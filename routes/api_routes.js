const express = require('express');
const api = express.Router();
const auth = require('../middlewares/Auth');

// @ import controllers 
const UserController = require('../controllers/api/UserController');


// UserController routes 
api.get('/signup', UserController.userSignup);
api.get('/fetch-profile', auth, UserController.fetchProfile);
api.get('/update-profile', auth, UserController.updateProfile);


module.exports = api;