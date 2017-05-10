var page = require('page');
var empty = require('empty-element');
var template = require('./template');

page('/', function (ctx, next) {
  var main = document.getElementById('main-container');
  var pictures = [
    {
      user: {
        username: 'saulpolo95',
        avatar: 'https://scontent-dft4-2.xx.fbcdn.net/v/t1.0-1/c0.5.160.160/p160x160/13872993_174638556288372_5069571747674313849_n.jpg?oh=057868a7f3eb1bf85ce57b70cfb32cb4&oe=597ACB5E'
      },
      url: 'http://materializecss.com/images/office.jpg',
      likes: 0,
      liked: true,
      createdAt: new Date()
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
  empty(main).appendChild(template(pictures));
})
