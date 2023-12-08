/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(stri) {

  let str=stri.toLowerCase();
var i=0;
var j=str.length-1;
// console.log(i+" "+j);
 while(i<=j){
      if(str[i]>='a' && str[i]<='z') break;
      i++;
 } 


  while(j>=i){
      if(str[j]>='a' && str[j]<='z') break;
      j--;
  } 
  
  
while(i<=j){
    // console.log(i+" "+j);
  if(str[i]!=str[j]) return false;
  i++;j--;
  while(i<=j){
    if(str[i]>='a' && str[i]<='z') break;
      i++;  
  } 
  while(j>=i){
      if(str[j]>='a' && str[j]<='z') break;
      j--;
  }
}

  return true;
}

module.exports = isPalindrome;
