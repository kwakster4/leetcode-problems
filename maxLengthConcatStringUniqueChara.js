// https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/

/*
Given array of strings arr, String s is a concatenation of subsequece of arr which have unique characters
Return Maximum possible length of s

Example 1:
Input: arr = ["un","iq","ue"]
Output: 4
Explanation: All possible concatenations are "","un","iq","ue","uniq" and "ique".
Maximum length is 4.

Example 2:
Input: arr = ["cha","r","act","ers"]
Output: 6
Explanation: Possible solutions are "chaers" and "acters".

Example 3:
Input: arr = ["abcdefghijklmnopqrstuvwxyz"]
Output: 26
***********************************
Input: array of strings
Output: max length of concatenation with unique letters
Constraints: array length bw 1 and 16; item length between 1 and 26; only lowercase letters
Edge: What if only one item in array, but has nonunique letters? Assume return 0;
*/

var maxLength = function(arr) {
  // try all combinations of arr, from its own element, to combinations of other elements. if the combination is unique, check its length and compare to the maxLength. Once all combinations have been checked, return maxLength;
  var maxBacktrack = function(array, currentStr, idx) {
    if (idx === array.length) {
      return currentStr.length;
    }
    let max = 0;
    let concat = currentStr + array[idx];
    // if concat is unique, continue along branch to continue concating with other items from array
    if (isUnique(concat)) {
      max = Math.max(max, maxBacktrack(array, concat, idx + 1));
    }
    //continue with current string to concat with other items from array. at this point, max is either before, or from the isUnique. Regardless, backtracked by not concatting with item.
    max = Math.max(max, maxBacktrack(array, currentStr, idx + 1));
    return max;
  }
  return maxBacktrack(arr, "", 0);
};


var isUnique = function(string) {
  // helper function, determines if string has unique characters
  let wordBank = {};
  for (let char of string) {
    // do something
    if (wordBank[char]) {
      return false;
    } else {
      wordBank[char] = true;
    }
  }
  return true;
}