/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // str1.toLowerCase();
  // str2.toLowerCase();
  var arr=str1.toLowerCase().split('');
  arr.sort();
  var arr2=str2.toLowerCase().split('');
   arr2.sort();
  // var arr2=arr;
  if(arr.length!=arr2.length) return false;
  for(var i=0;i<arr.length;i++) if(arr[i]!=arr2[i]) return false;
  return true;
 
}

module.exports = isAnagram;
