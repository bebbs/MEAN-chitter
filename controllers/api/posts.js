var Post = require('../../models/post');
var router = require('express').Router();

router.get('/', function(request,response, next) {
  Post.find()
    .sort('-date')
    .exec(function(err, posts) {
      if (err) { return next(err) };
      response.json(posts);
  });
});

router.post('/', function(request,response, next) {
  var post = new Post({
    username: request.body.username,
    body: request.body.body
  });
  post.save(function(err,post) {
    if (err) { return next(err) };
    response.json(201, post)
  });
});

module.exports = router;