let count=0;
function counter(){
  if(count<100){
    count++;
    console.log(count);
    setTimeout(counter,1000);
  }
  

}
counter(0);