var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello world')
})

app.listen(3000, function(err) {
  if(err) return console.log('Error: ', err), process.exit(1);
  console.log('Instaclone in PORT: 3000');
})
