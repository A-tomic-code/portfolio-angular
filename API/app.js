const express = require('express');
const cors = require('cors');

const app = express();

const errorHandling = require('./error/errorHandling');
const mailRouter = require('./router/mail.router');
const testRouter = require('./router/test.router');

app.set('port', process.env.PORT || 5555);

app.use(cors());
app.use(express.json())

app.use(mailRouter);
app.use(testRouter);

app.use( (req, res, next) => {
    res.status(404).json({
        message: 'RES NOT FOUND AT THIS SERVER'
    })
    next()
})
app.use(errorHandling);


module.exports = app;
