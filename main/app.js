const express = require('express')
const app = express();
const chalk = require('chalk');
const bodyParser = require('body-parser');

/** For request body parsing */
// app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

/** For request body parsing */

app.use((req, res, next) => {
    // For example, a GET request to `/test` will print "GET /test"
    console.log(req.body);
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    console.log(chalk.yellow(`${req.method} : ${fullUrl}`));
    next();
});

/**define app routes */
app.use('/web/v1', require('../routes/web_routes'));
app.use('/api/v1', require('../routes/api_routes'));
app.use('/admin/v1', require('../routes/admin_routes'));
/**define app routes */


module.exports = app;