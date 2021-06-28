// https://leetcode.com/problems/two-sum/

// Input: array of integers and an integer target
// Output: indices of two numbers s.t. they add up to target
// Constraints: each input would have exactly one solution, may not use same element twice
// return answer in any order;
// Follow up: come up with algorithm less than O(n^2) time complexity
var twoSum = function(nums, target) {
  // naiive solution: O(n^2) TC
  if (nums.length === 2) {
    return [0, 1];
  }
  // iterate through nums
  for (let i = 0; i < nums.length - 1; i++) {
    // iterate through remaining nums
    for (let j = i + 1; j < nums.length; j++) {
      // find pair where two numbers are equal to target, return;
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};