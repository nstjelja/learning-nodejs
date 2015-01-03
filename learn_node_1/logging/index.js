var colors = require('colors');
var stringify = require('json-stringify-safe');

function getString(data){
  if (data == undefined)
      return "";

  if (typeof(data) == "String")
    return data;

  var txt = stringify(data,null,2);
  return txt;

};

function logger(){};
logger.prototype.info = function(message){
  console.log(getString(message).zebra.grey);
};
logger.prototype.error = function(message){
  console.log(getString(message).zebra.red);
};
logger.prototype.warn  = function(message){
  console.log(getString(message).zebra.magenta);
};


exports.logger = logger;
