const express = require('express');
const router = express.Router();


// @ import controllers 
const UserController = require('../controllers/api/UserController');


// UserController routes 
router.get('/signup', UserController.userSignup);


module.exports = router;