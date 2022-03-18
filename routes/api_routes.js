const express = require('express');
const api = express.Router();
const auth = require('../middlewares/Auth');

// @ import controllers 
const UserController = require('../controllers/api/UserController');


// UserController routes 
api.post('/signup', UserController.userSignup);
api.post('/fetch-profile', auth, UserController.fetchProfile);
api.post('/update-profile', auth, UserController.updateProfile);


module.exports = api;