var fs = require('fs');

fs.readFile("hla.base64", {encoding:"ascii", flag:"r"}, function(err, data){
  if (err){
    console.log(err);
    return;
  }

  var buffer = new Buffer(data, 'base64');
  console.log(buffer);

  fs.writeFile('hla.png', buffer);
});
