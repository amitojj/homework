// Palindrome Checker Function

// Objective: Write a JavaScript function isPalindrome(str) that checks if a given string str is a palindrome. A palindrome is a word, phrase, number, or other sequences of characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization). Example: Input: isPalindrome("racecar") Output: true Input: isPalindrome("hello") Output: false
// task 1 reverse the string
// task 2 compare with original string

// task 1   reverse the string
// method 1
// function reverseStr(str) {
//   // const str2arr = str.split("")
//   // const arrReverse = str2arr.reverse()
//   // const arr2str = arrReverse.join("")
//   return str.split("").reverse().join("");
// }
// method 2 using for loop
function reverseStr(str) {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

function isPalindrome(str) {
  return str === reverseStr(str) ? true : false;
}
let str;
str = "racecar";
console.log(isPalindrome(str));
str = "howdy";
console.log(isPalindrome(str));
str = "level";
console.log(isPalindrome(str));

