console.log(process.cwd());
console.log(process.env.NODE_ENV);
console.log(process.env.SHELL);
console.error('Error occured');
process.on('SIGKILL',function(){
  console.log('Signal received');
});
process.exit(1);
