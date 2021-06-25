// https://leetcode.com/problems/roman-to-integer/

var dictionary = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000
}

var romanToInt = function(s) {
  let result = 0;
  let previous = 0;
  // iterate through the string from the back
  for (let i = s.length - 1; i >= 0; i--) {
    let current = dictionary[s[i]];
    // if current number is less than previous number subtract from result
    if (current < previous) {
      result -= current;
    } else {
      // if current number is greater than or equal to previous number add to result
      result += current;
    }
    // if current number is greater than previous number set previous to current
    if (current > previous) {
      previous = current;
    }
  }
  // return result;
  return result;
};