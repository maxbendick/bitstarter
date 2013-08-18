var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {


//attempts to read file
  var fs = require('fs');
  fs.readFileSync('inxdex.html', function(err, data){
    if (err) throw err;
    console.log(data);
  });
//^^attempts to read file

 
  response.send(data);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
