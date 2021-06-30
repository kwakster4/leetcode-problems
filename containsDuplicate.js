// https://leetcode.com/problems/contains-duplicate/

// Input: integer array nums
// Output: true if any value appears at least twice in array, false if every element distinct
// Constraints: 1 <= nums.length <= 10^5; integer will be +- 10^9;
// Edge: num is 0, which is falsy
var containsDuplicate = function(nums) {
  let bank = {};
  for (let num of nums) {
    if (bank[num]) {
      return true;
    } else {
      bank[num] = true;
    }
  }
  return false;
};