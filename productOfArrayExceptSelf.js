// https://leetcode.com/problems/product-of-array-except-self/
// Input: array of integers
// Output: array of integers s.t. answer[i] === product of all elements of nums except nums[i];
// Constraints: O(n) time, cannot use division operation, length of input will be between 2 and 10^5, product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer

var productExceptSelf = function(nums) {
  // Can iterate over nums, but cannot iterate over nums over an iteration, i.e. O(n) TC. Cannot use division.
  // Hint: use prefix and suffix arrays.
  // In the prefix array, prefix starts as 1 for the prefix[0]. Then, prefix[1] is the previous prefix (i.e. prefix[0]) * nums[0]. Then prefix[2] = prefix[1] * nums[1], and so on and so forth until length of prefix = length of nums.
  // In suffix array, same but go backwards;
  // suffix[0] = 1; corresponds to the last item in nums;
  // suffix[1] = suffix[0] * nums[nums.length - 1];
  // suffix[2] = suffix[1] * nums[nums.length - 2];
  // idea behind the prefixes and suffixes is to avoid O(n^2) by using the previous prefix or suffix in the continuous calculations.
  let prefix = [1];
  result = [];
  while (prefix.length !== nums.length) {
    prefix[prefix.length] = prefix[prefix.length - 1] * nums[prefix.length - 1];
  }
  let suffix = [1];
  while(suffix.length !== nums.length) {
    suffix[suffix.length] = suffix[suffix.length - 1] * nums[nums.length - suffix.length];
  }
  for (let i = 0; i < nums.length; i++) {
    let first = prefix[i];
    let second = suffix[nums.length - 1 - i];
    result.push(first * second);
  }
  return result;
};