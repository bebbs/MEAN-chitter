var express = require('express');
var router = express.Router();

router.use(express.static(__dirname + '/../assets'));

router.get('/', function(request,response) {
  response.sendfile('layouts/posts.html');
});

module.exports = router;