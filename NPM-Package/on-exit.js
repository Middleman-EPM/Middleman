if (process.platform === 'win32'){
  const rl = require("readline").createInterface({
    input:process.stdin,
    output:process.stdout
  })
  rl.on('SIGINT', ()=>{process.emit("SIGINT")})
}

const filePath = __dirname;

process.on('SIGINT', (code)=>{
  //console.log(`About to close bitches::: ${code}`);
  // process.on('exit',()=>{
  // })
  console.log(`About to close bitches::: ${code}`);
  let buffer = new Buffer("some content\n");
const fs = require('fs');
console.log(filePath);
// Create a writable stream &  Write the data to stream with encoding to be utf8
const writerStream = fs.createWriteStream(filePath+'/output.json',{flags: 'a'})
.on('finish', function() {
     console.log("Write Finish.");
    process.exit();
 })
.on('error', function(err){
    console.log(err.stack);
 });
 

writerStream.write(JSON.stringify(map),function() {
// Now the data has been written.
console.log("Write completed.");
});

writerStream.end();


});