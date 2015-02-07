var router = require('express').Router();

router.get('/', function(request,response) {
  response.sendfile('layouts/posts.html');
});

module.exports = router;