// https://leetcode.com/problems/longest-common-prefix/

/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".



Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.


Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lower-case English letters.
*/

var longestCommonPrefix = function(strs) {
  // input: array of strings
  // output: string that is the longest common prefix amongst the array of strings
  let prefix = "";
  for (let i = 0; i < strs[0].length; i++) {
    let checkChar = prefix + strs[0][i];
    // check to see if every string has the checkChar as a prefix
    let contains = strs.every((str) => {
      return str.slice(0, i + 1) === checkChar;
    })
    if (contains) {
      prefix = checkChar;
    } else {
      return prefix;
    }
    // if so, set prefix to checkChar
    // if not, return prefix
  }
  return prefix;
};