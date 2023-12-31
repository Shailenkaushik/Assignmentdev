const fs=require("fs");

fs.readFile("dummy.txt","utf-8",function(err,data){
  
  console.log(data);
})
fs.writeFile("dummy.txt","i am good",(err)=>{

  if (err)
    console.log(err);
  else {
    console.log("File written successfully\n");
    console.log("The written has the following contents:");
    // console.log(fs.readFileSync("dummy.txt", "utf8"));
  }
})
fs.readFile("dummy.txt","utf-8",function(err,data){

  console.log(data);
})
console.log("hk")
for(let i=0;i<1000000;i++){
   let a=0;
}
fs.readFile("dummy.txt","utf-8",function(err,data){

  console.log("hi",data);
})

