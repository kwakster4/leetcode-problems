// https://leetcode.com/problems/longest-nice-substring/

// string s considered nice if for every letter of alphabet s contains, it appears both in uppercase and lowercase

// Input: string
// Output: longest substring of input that is nice. If multiple, return substring of earliest occurence. If none, return empty string;
// Constraint: string length will be bw 1 and 100; s consists of upper and lower case letters

var longestNiceSubstring = function(s) {
  // Find all possible substrings, if isNice, check to see if its length is longer than current maxNiceSubstr.
  let maxNiceSubstr = "";
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      let substr = s.slice(i, j);
      if (isNice(substr) && substr.length > maxNiceSubstr.length) {
        maxNiceSubstr = substr;
      }
    }
  }
  return maxNiceSubstr;
};

var isNice = function(s) {
  // check to see if s is nice
  // iterate through s
  let wordBank = {};
  for (let char of s) {
    if (wordBank[char] === undefined) {
      if (char.toUpperCase() === char) {
        if (!s.includes(char.toLowerCase())) {
          return false;
        }
        wordBank[char] = true;
        wordBank[char.toLowerCase()] = true;
      } else {
        if (!s.includes(char.toUpperCase())) {
          return false;
        }
        wordBank[char] = true;
        wordBank[char.toUpperCase()] = true;
      }
    }
  }
  return true;
}