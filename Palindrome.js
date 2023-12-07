// Palindrome Checker Function

// Objective: Write a JavaScript function isPalindrome(str) that checks if a given string str is a palindrome. A palindrome is a word, phrase, number, or other sequences of characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization). Example: Input: isPalindrome("racecar") Output: true Input: isPalindrome("hello") Output: false
// task 1 reverse the string
// task 2 compare with original string

// task 1   reverse the string
// method 1
function reverseStr(str) {
  return str.split("").reverse().join("");
}
// method 2 using for loop
// function reverseStr(str) {
//   let newStr = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     newStr += str[i];
//   }
//   return newStr;
// }
// Extract alphanumeric characters from string
function alphanumerics(str) {
  let alphaNumericStr = "";
  for (let i = 0; i <= str.length; i++) {
    if (
      (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) ||
      (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) ||
      (str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57)
    ) {
      alphaNumericStr += str[i];
    } else {
      continue;
    }
  }
  return alphaNumericStr.toLowerCase()
  
}
//  using recursion
// function reverseStr(str) {
//   if (str.length<=1){
//     return str;
//   }else {
//     return  reverseStr(str.slice(1)) + str[0]
//   }
// }
function isPalindrome(str) {
  return alphanumerics(str) === reverseStr(alphanumerics(str)) ? true : false;
}
let str;
// str = "racecar";
// console.log(isPalindrome(str));
// str = "howdy";
// console.log(isPalindrome(str));
str = "121 A man, a plan, a canal, Panama! 121";
console.log(isPalindrome(str));

