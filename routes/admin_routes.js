const express = require('express');
const admin = express.Router();

/** controller initializations */
const AdminController = require('../controllers/admin/AdminController');
/** controller initializations */

admin.all('admin-login', AdminController.AdminLogin)


module.exports = admin;