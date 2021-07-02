// https://leetcode.com/problems/maximum-subarray/

var maxSubArray = function(nums) {
  // Input: integers array
  // Output: find contiguous subarray that contains at least one number that has largest sum and return its sum
  let max = Number.NEGATIVE_INFINITY;
  // iterate over number
  for (let i = 0; i < nums.length - 1; i++) {
    let prefix = nums[i];
    if (prefix > max) {
      max = prefix;
    }
    for (let j = i + 1; j < nums.length; j++) {
      prefix = prefix + nums[j];
      if (prefix > max) {
        max = prefix;
      }
    }
  }
  if (nums[nums.length - 1] > max) {
    return nums[nums.length - 1];
  }
  return max;
};