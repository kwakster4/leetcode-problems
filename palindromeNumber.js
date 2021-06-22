// https://leetcode.com/problems/palindrome-number/

// Input: integer
// Output: Boolean, is input a palindrome integer
// Constraints: input does not reach memory overflow
// Edge: negative numbers are all invalid, bc -101 not equal to 101-

var isPalindrome = function(x) {
  if (x < 0) {
    return false;
  }
  let string = x.toString();
  for (let i = 0; i < Math.floor(string.length / 2); i++) {
    if (string[i] !== string[string.length - 1 - i]) {
      return false;
    }
  }
  return true;
};