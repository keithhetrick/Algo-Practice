// 589. N-ary Tree Preorder Traversal
// https://leetcode.com/problems/n-ary-tree-preorder-traversal/

// Given the root of an n-ary tree, return the preorder traversal of its nodes' values.

// Nary-Tree input serialization is represented in their level order traversal. Each group of children is separated by the null value (See examples)

function preorder(root) {
  let result = [];
  function traverse(node) {
    if (!node) return;
    result.push(node.val);
    for (let child of node.children) {
      traverse(child);
    }
  }
  traverse(root);
  return result;
}
preorder([1, null, 3, 2, 4, null, 5, 6]); // expects [1,3,5,6,2,4]
preorder([
  1,
  null,
  2,
  3,
  4,
  5,
  null,
  null,
  6,
  7,
  null,
  8,
  null,
  9,
  10,
  null,
  null,
  11,
  null,
  12,
  null,
  13,
  null,
  null,
  14,
]); // expects [1,2,3,6,7,11,14,4,8,12,5,9,13,10]
