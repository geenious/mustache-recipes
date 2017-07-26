const express = require('express');
const mustacheExpress = require('mustache-express');
const data = require('./data');

const app = express();

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

app.use(express.static('public'));

app.get('/', function(req, res) {
  res.render('index', data);
});

app.listen(3000, function() {
  console.log('Listening at port 3000');
});
