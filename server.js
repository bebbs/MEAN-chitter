var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

app.get('/api/posts', function(request,response) {
  response.json([
    {
      username: 'josh',
      body: 'node rocks!'
    }
  ]);
});

app.post('/api/posts', function(request,response) {
  console.log('Post received:');
  console.log(request.body.username);
  console.log(request.body.body);
  response.send(201);
})

app.listen(9999, function() {
  console.log('Server listening on ' + 9999);
});