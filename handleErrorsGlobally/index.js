var http = require('http');

var server = http.createServer(function(req,res){

    throw new {M:"Aleluja", R : res};
});

process.on("uncaughtException",function(err){
  console.warn(err.M);
  err.R.end("AAAAAAA");

})

server.listen(3000);
