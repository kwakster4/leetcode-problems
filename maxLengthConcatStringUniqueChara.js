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