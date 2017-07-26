const express = require('express');
const mustacheExpress = require('mustache-express');
const data = require('./data');

const app = express();

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + 'views');


app.listen(3000, function() {
  console.log('Listening at port 3000');
});
