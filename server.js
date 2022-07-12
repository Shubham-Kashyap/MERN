// const config = require('config');
import config from 'config';
import app from './main/app';
import chalk from 'chalk';
import env from 'dotenv';
// const app = require('./main/app');
// const chalk = require('chalk');
// const env = require('dotenv').config();

app.listen(port = process.env.PORT, () => {
    console.log(chalk.yellow.bold('Server is runnning on port : ' + port));
})


// app.use('/', (req, res) => {
//     res.send('bgdfg')
//     console.log('hello')
// })



