var http = require("http");

http.createServer(function(request, response){
	response.writeHead(200, {"Content-Type":"text/plain"});
	response.end("Hello World");
}).listen(8888);

console.log("Server running at http://127.0.0.1:8124")

/*function onRequest(request, response) {
	response.writeHead(200, {"Contenet-Type":"text/plain"});
	response.write("Hello world2");
	response.end();
}

http.createServer(onRequest).listen(8888);*/