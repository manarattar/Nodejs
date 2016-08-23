var http = require('http')
var fs = require('fs')
var url = require('url')


var myhttp = http.createServer(function (request, response) {
    var queryString = url.parse(request.url,true).query;
    console.log('hello '+ queryString.name);


    response.writeHead(200);
    fs.readFile('./index.html',null,function(error,data){
        if (error){
            response.writeHead(404);
            response.write('File not found');
        } else{
            response.write(data);
            response.write('hello '+ queryString.name);
        	}
      	  response.end();
  	  });
	});
	myhttp.listen(8080);

		console.log("I'm listening on port 8080 http://localhost:8080/index.html?name=manar");