const fs=require("fs")
// const clock = () => {
//   const time = new Date();
//   const hours = time.getHours() > 9 ? time.getHours() : `0${time.getHours()}`;
//   const minutes =
//     time.getMinutes() > 9 ? time.getMinutes() : `0${time.getMinutes()}`;
//   const seconds =
//     time.getSeconds() > 9 ? time.getSeconds() : `0${time.getSeconds()}`;
//   console.log(`${hours}:${minutes}:${seconds}`);
// };

// setInterval(clock, 1000);
fs.readFile("dummy.txt","utf-8",function(err,data){

  let array=data.split(" ");
  // console.log(array);
  let ans="";
  for(let i=0;i<array.length;i++){
    if(array[i]==""){
      continue;
    }
    else{
      ans+=array[i];
    if(i!=array.length-1)  ans+=" ";
    }
  }
  console.log(ans);

      fs.writeFile("dummy.txt",ans,(err)=>{

        if (err)
          console.log(err);
        else {
          console.log("File written successfully\n");
          console.log("The written has the following contents:");
          console.log(fs.readFileSync("dummy.txt", "utf8"));
        }
      })


  
 })

