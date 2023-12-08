/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/
function isvowel(ab){

  if(ab=='a' || ab=='e' || ab=='i' || ab=='o' || ab=='u') return true;
  return false;
}
function countVowels(stri) {
 // Your code here
 var cnt=0;
let str= stri.toLowerCase();
 // console.log(str);
 for(var i=0;i<str.length;i++){
   if(isvowel(str[i])){
       cnt++;
     //   console.log(str[i]);
   } 
 }
 return cnt;
}


module.exports = countVowels;