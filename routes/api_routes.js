const express = require('express');
const api = express.Router();


// @ import controllers 
const UserController = require('../controllers/api/UserController');


// UserController routes 
api.get('signup', UserController.userSignup);


module.exports = api;