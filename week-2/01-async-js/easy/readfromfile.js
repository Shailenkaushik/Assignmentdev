const fs=require("fs");

fs.readFile("dummy.txt","utf-8",function(err,data){
  
  console.log(data);
})