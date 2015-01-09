/**
* Dependencies
*/

var fs = require('fs'), colors = require('colors');
var stdin = process.stdin;
var stdout = process.stdout;


var stats = [];

var fileHandler = null;
fileHandler = function fileHandlerFun(files,index){
  var filename = files[index];
  var fileStatHandler = function fileStatHandlerFun(err,stat){
    stats[index] = stat;

    if (err){
      console.log(filename);
      return;
    }
    if (stat.isDirectory()){
      console.log(' '+index +' \033[36m' + filename +' /\033[39m');
    }

    if (!stat.isDirectory()){
      console.log(' '+index +' \033[90m' + filename +' /\033[39m');
    }

    index++;

    if (index != files.length){
       fileHandler(files, index);
       return;
    }

    console.log('');

    process.stdout.write('\033[33m Enter your choice: \033[39m');
    process.stdin.resume();
    process.stdin.setEncoding('utf8');


  }

  fs.stat(__dirname + '/' + filename,fileStatHandler );

}

var readDirHandler = function readDirHandlerFun(err, files){
  console.log('');

  if (!files.length){
     return console.log(' \033[31m No files to show!\033[39m\n');
  }

  console.log('Select which file or directory you wan\'t to see \n');

  fileHandler(files, 0);

  stdin.on('data',function(data){
    var filename = files[Number(data)];
    if (!filename){
        stdout.write("Enter zour choice".red);
        return;
    }

    if (stats[Number(data)].isDirectory()){
      fs.readdir(__dirname+"/"+filename, function(err, files){
          console.log('');
          var l = files.length;
          console.log('('+l+') files');

          for(var key in files){
             console.log(' - '+ files[key]);
          };

          console.log('');
      });
      return;
    }


    fs.readFile(__dirname+"/"+filename,'utf8', function(err,data){
      console.log('');
      console.log(' '+data.replace(/(.*)/g,' $1')+''.green);
    });
  });
}

fs.readdir(process.cwd(), readDirHandler);
