// https://leetcode.com/problems/remove-element/

// Input: array of nums and value to remove
// Output: nums has been transformed, and returns nums.length
var removeElement = function(nums, val) {
  let i = 0;
  while (i < nums.length) {
    if (nums[i] === val) {
      nums.splice(i, 1);
    } else {
      i++
    }
  }
  return nums.length
};