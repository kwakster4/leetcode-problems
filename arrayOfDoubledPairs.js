// https://leetcode.com/problems/array-of-doubled-pairs/

/*
Given an array of integers arr of even length, return true if and only if it is possible to reorder it such that arr[2 * i + 1] = 2 * arr[2 * i] for every 0 <= i < len(arr) / 2.

Example 1:
Input: arr = [3,1,3,6]
Output: false

Example 2:
Input: arr = [2,1,2,6]
Output: false

Example 3:
Input: arr = [4,-2,2,-4]
Output: true
Explanation: We can take two groups, [-2,-4] and [2,4] to form [-2,-4,2,4] or [2,4,-2,-4].

Example 4:
Input: arr = [1,2,4,16,8,4]
Output: false


Constraints:

0 <= arr.length <= 3 * 104
arr.length is even.
-105 <= arr[i] <= 105
*/

// Input: an array
// Output: whether that array's elements can be paired to be doubled of another element in the array. Refer to examples given
// Constraints: 0 <= arr.length <= 3 * 104, will always be even, and -105 <= arr[i] <= 105
// Edge: what to respond if arr.length is 0? Assume respond with true;

var canReorderDoubled = function(arr) {
  let posArr = arr.filter(element => element > 0);
  let negArr = arr.filter(element => element < 0);
  // zArr and its check may not be necessary due to constraint of always having even length arrays
  let zArr = arr.filter(element => element === 0);
  // if either is not of even length, return false
  if (posArr.length % 2 !== 0 || negArr.length % 2 !== 0) {
    return false;
  }
  if (zArr.length % 2 !== 0) {
    return false;
  }
  let sortFunc = function(a,b) {
    if (a > b) {return 1}
    if (a < b) {return -1}
    return 0;
  }
  posArr = posArr.sort(sortFunc);
  negArr = negArr.sort(sortFunc);
  // the array is sorted. Now use previous solution on both arrs
  // previous solution flawed, fails with [1,2,4,8]
  // change to indexOf, but higher time complexity
  // current solution counts things twice, fails with [1,2,4,16,8,4]
  while(posArr.length > 0) {
    let targetIndex = posArr.indexOf(posArr[0] * 2);
    if (targetIndex === -1) {
      return false;
    }
    posArr.splice(targetIndex, 1);
    posArr.shift();
  }
  while(negArr.length > 0) {
    let targetIndex = negArr.indexOf(negArr[0] / 2);
    if (targetIndex === -1) {
      return false;
    }
    negArr.splice(targetIndex, 1);
    negArr.shift();
  }
  // for (let i = 0; i < posArr.length / 2; i++) {
  //   if (posArr.indexOf(posArr[i] * 2) === -1) {
  //     return false;
  //   }
  // }
  // for (let j = 0; j < negArr.length / 2; j++) {
  //   if (negArr.indexOf(negArr[j] / 2) === -1) {
  //     return false;
  //   }
  // }
  // end with true.
  return true;
};


// Previous plan, Time complexity O(n), fails if 0's included, as well as pairs with opposing signs
// // make all elements positive, sort the array
// let posArr = arr.map((item) => {
//   if (item < 0) {
//     return item * -1;
//   } else {
//     return item;
//   }
// }).sort((a,b)=> {
//   if (a > b) {
//     return 1;
//   } else if (a < b) {
//     return -1;
//   } else {
//     return 0;
//   }
// });
// // iterate through the array, find if array's counterpart in the other side, i.e. 0 to the half + 1 of the array, and the half of the array to the end of the array, are doubles
// let half = posArr.length / 2;
// for (let i = 0; i < half; i++) {
//   if (posArr[i] * 2 !== posArr[i + half]) {
//     // if not, respond with false
//     return false;
//   }
// }
// // end with true.
// return true;