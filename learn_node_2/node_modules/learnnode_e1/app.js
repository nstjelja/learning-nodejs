var http = require('http'), logger = require('./logging');

var log = new logger.logger();

var serv = http.createServer(function(req, res){
  log.info(req);
  log.warn("Warning");
  log.error("Error");
  res.writeHead(200, {"content-type":"text/html"});
  res.end("<marquee>Hello</marquee>")
});

serv.listen(3000);
