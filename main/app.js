const express = require('express')
const app = express();



/**define app routes */
app.use('/web/v1', require('../routes/web_routes'));
app.use('/api/v1', require('../routes/api_routes'));
app.use('/admin/v1', require('../routes/admin_routes'));
/**define app routes */


module.exports = app;