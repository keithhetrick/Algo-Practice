// 235. Lowest Common Ancestor of a Binary Search Tree
// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

function lowestCommonAncestor(root, p, q) {
  if (root.val > p.val && root.val > q.val)
    return lowestCommonAncestor(root.left, p, q);
  if (root.val < p.val && root.val < q.val)
    return lowestCommonAncestor(root.right, p, q);
  return root;
}
lowestCommonAncestor([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5], 2, 8); // expects 6
lowestCommonAncestor([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5], 2, 4); // expects 2
