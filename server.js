var http = require('http');
var Router = require('node-simple-router');
var router = Router({
    static_route: __dirname
});

router.post("/registration", function(request, response) {
    //console.log( request.body);
    response.end(JSON.stringify(request.body));

});


var server = http.createServer(router);
server.listen(8080);
console.log("Server is listening on http://localhost:8080");