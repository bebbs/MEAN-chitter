var express = require('express');
var bodyParser = require('body-parser');
var Post = require('./models/post')

var app = express();
app.use(bodyParser.json());

app.get('/api/posts', function(request,response, next) {
  Post.find(function(err, posts) {
    if (err) { return next(err) };
    response.json(posts);
  })
});

app.post('/api/posts', function(request,response, next) {
  var post = new Post({
    username: request.body.username,
    body: request.body.body
  });
  post.save(function(err,post) {
    if (err) { return next(err) };
    response.json(201, post)
  });
})

app.listen(9999, function() {
  console.log('Server listening on ' + 9999);
});