// https://leetcode.com/problems/reverse-integer/

// Input: number
// Output: number with reversed Integers
// Constraints: x is always between -2^31 and 2^31 - 1

var reverse = function(x) {
  let neg = false;
  if (x < 0) { neg = true; }
  let numStr = x.toString();
  let result = '';
  if (neg) {
    numStr = numStr.slice(1);
    result = '-';
  }
  for (let i = numStr.length - 1; i >= 0; i--) {
    result += numStr[i];
  }
  if (parseInt(result) > 2147483647 || parseInt(result) < -2147483648) {
    return 0;
  }
  return parseInt(result) || 0;
};