// 98. Validate Binary Search Tree
// https://leetcode.com/problems/validate-binary-search-tree/

// Given the root of a binary tree, determine if it is a valid binary search tree (BST).

// A valid BST is defined as follows:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.

function isValidBST(root) {
  let result = true;
  function traverse(node, min, max) {
    if (!node) return;
    if (node.val <= min || node.val >= max) {
      result = false;
      return;
    }
    traverse(node.left, min, node.val);
    traverse(node.right, node.val, max);
  }
  traverse(root, -Infinity, Infinity);
  return result;
}
isValidBST([2, 1, 3]); // expects true
isValidBST([5, 1, 4, null, null, 3, 6]); // expects false
