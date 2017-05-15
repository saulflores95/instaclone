var express = require('express');

var app = express();

app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.render('index');
})

app.get('/signup', function (req, res) {
  res.render('index');
})

app.get('/signin', function (req, res) {
  res.render('index');
})

app.get('/api/pictures', function(req, res) {
  var pictures = [
    {
      user: {
        username: 'saulpolo95',
        avatar: 'https://scontent-dft4-2.xx.fbcdn.net/v/t1.0-1/c0.5.160.160/p160x160/13872993_174638556288372_5069571747674313849_n.jpg?oh=057868a7f3eb1bf85ce57b70cfb32cb4&oe=597ACB5E'
      },
      url: 'http://materializecss.com/images/office.jpg',
      likes: 0,
      liked: true,
      createdAt: new Date().getTime()
    },
    {
      user: {
        username: 'saulpolo95',
        avatar: 'https://scontent-dft4-2.xx.fbcdn.net/v/t1.0-1/c0.5.160.160/p160x160/13872993_174638556288372_5069571747674313849_n.jpg?oh=057868a7f3eb1bf85ce57b70cfb32cb4&oe=597ACB5E'
      },
      url: 'http://materializecss.com/images/office.jpg',
      likes: 1,
      liked: true,
      createdAt: new Date().setDate(new Date().getDate() - 10)
    }
  ];
  setTimeout(function() {
    res.send(pictures);
  } , 2000);
})

app.listen(3000, function (err) {
  if (err) return console.log('Hubo un error'), process.exit(1);

  console.log('Instaclone escuchando en el puerto 3000');
})
