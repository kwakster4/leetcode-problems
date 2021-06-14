// https://leetcode.com/problems/sum-of-left-leaves/
// Given root of a binary tree, return the sum of all left leaves

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * Input: param {TreeNode} root
 * Output: return {number}
 */
 var sumOfLeftLeaves = function(root) {
  // initialize sum variable
  // make recursion function that goes through all the children of the node, and adds the left leaf to the param
  let sum = 0;
  let leftTraverse = function(node) {
    if (node.left) {
      sum += node.left.val;
    }
    if (node.left) {leftTraverse(node.left);}
    if (node.right) {leftTraverse(node.right);}
  }
  leftTraverse(root);
  return sum;
};