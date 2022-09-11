const express = require('express')
const app = express();

app.use(express.static(__dirname + '/dist/portfolio'));

app.get('/*', (req, res) => {
    console.log(req);
    res.sendFile('index.html', {root: __dirname + '/dist/portfolio'});
});

app.listen(process.env.PORT || 8080, () => { 
    console.log('server running');
});