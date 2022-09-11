const app = require('./app');

app.listen(app.get('port'), () => {
    console.log('API Running on port ' + app.get('port'));
    });

module.exports = app;