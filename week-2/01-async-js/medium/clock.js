let sec=0;
let min=0;
let hr=0;


function counter(){
  sec++;
  if(sec>=60){
    min=min+1;
    sec=0;
  }
  if(min>=60){
    hr=hr+1;
    min=0;
  }
  console.log(hr,":",min,":",sec);
}
setInterval(counter,200);
// const clock = () => {
//     const time = new Date();
//     const hours = time.getHours() > 9 ? time.getHours() : `0${time.getHours()}`;
//     const minutes =
//       time.getMinutes() > 9 ? time.getMinutes() : `0${time.getMinutes()}`;
//     const seconds =
//       time.getSeconds() > 9 ? time.getSeconds() : `0${time.getSeconds()}`;
//     console.log(`${hours}:${minutes}:${seconds}`);
//   };
  
//   setInterval(clock, 1000);