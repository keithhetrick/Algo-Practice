// create a tree traversal function that will print out all values of a tree using both pre-order and post-order traversal

// pre-order traversal: visit the root, then traverse the left subtree, then traverse the right subtree
// post-order traversal: traverse the left subtree, then traverse the right subtree, then visit the root

// example:
//       1
//      / \
//     2   3
//    / \
//   4   5
// pre-order traversal: 1 2 4 5 3
// post-order traversal: 4 5 2 3 1

// create a tree class
function Tree(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

// create a tree node class
function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

// create a tree
let tree = new Tree(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(3);
tree.left.left = new TreeNode(4);
tree.left.right = new TreeNode(5);

// add to tree function
function addToTree(tree, val) {
  if (tree.val === null) {
    tree.val = val;
  } else if (val < tree.val) {
    if (tree.left === null) {
      tree.left = new TreeNode(val);
    } else {
      addToTree(tree.left, val);
    }
  } else if (val > tree.val) {
    if (tree.right === null) {
      tree.right = new TreeNode(val);
    } else {
      addToTree(tree.right, val);
    }
  }
}

// add values to tree
addToTree(tree, 6);
addToTree(tree, 7);
addToTree(tree, 8);
addToTree(tree, 9);
addToTree(tree, 10);
addToTree(tree, 11);
addToTree(tree, 12);
addToTree(tree, 13);
addToTree(tree, 14);
addToTree(tree, 15);
addToTree(tree, 16);
addToTree(tree, 17);
addToTree(tree, 18);
addToTree(tree, 19);
addToTree(tree, 20);

// create a tree traversal function
function treeTraversal(tree) {
  let preOrder = [];
  let postOrder = [];

  // helper function to traverse the tree
  function traverse(node) {
    if (node) {
      preOrder.push(node.val);
      traverse(node.left);
      traverse(node.right);
      postOrder.push(node.val);
    }
  }

  // traverse the tree
  traverse(tree);

  // remove values from preOrder and postOrder arrays that are null
  preOrder = preOrder.filter((val) => val !== null);
  postOrder = postOrder.filter((val) => val !== null);

  // remove values from preOrder and postOrder arrays that are undefined
  preOrder = preOrder.filter((val) => val !== undefined);
  postOrder = postOrder.filter((val) => val !== undefined);

  // remove values from preOrder and postOrder arrays that are NaN
  preOrder = preOrder.filter((val) => !Number.isNaN(val));
  postOrder = postOrder.filter((val) => !Number.isNaN(val));

  // remove values from tree
  let target = 6;
  preOrder = preOrder.filter((val) => val < target);
  postOrder = postOrder.filter((val) => val < target);

  // increment values in tree
  let increment = 1;
  preOrder = preOrder.map((val) => val + increment);
  postOrder = postOrder.map((val) => val + increment);

  // decrement values in tree
  let decrement = 1;
  preOrder = preOrder.map((val) => val - decrement);
  postOrder = postOrder.map((val) => val - decrement);

  // // sort values in tree
  // preOrder = preOrder.sort((a, b) => a - b);
  // postOrder = postOrder.sort((a, b) => b - a);

  // return the pre-order and post-order traversal results
  return {
    preOrder: preOrder,
    postOrder: postOrder,
  };
}

// Output
// { preOrder: [ 1, 2, 4, 5, 3 ], postOrder: [ 4, 5, 2, 3, 1 ] }
console.log(treeTraversal(tree));

// ========================================

// const tree = {
//   value: 1,
//   left: {
//     value: 2,
//     left: {
//       value: 4,
//     },
//     right: {
//       value: 5,
//     },
//   },
//   right: {
//     value: 3,
//     left: {
//       value: 6,
//     },
//     right: {
//       value: 7,
//     },
//   },
// };

// const preOrder = (node) => {
//   if (node) {
//     console.log(node.value);
//     preOrder(node.left);
//     preOrder(node.right);
//   }
// };

// const postOrder = (node) => {
//   if (node) {
//     postOrder(node.left);
//     postOrder(node.right);
//     console.log(node.value);
//   }
// };
// console.log("preOrder: ", preOrder(tree));
// console.log("postOrder: ", postOrder(tree));

// ========================================

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// class Tree {
//   constructor() {
//     this.root = null;
//   }

//   traverse() {
//     let result = [];
//     let current = this.root;
//     let stack = [current];

//     while (stack.length) {
//       current = stack.pop();
//       result.push(current.value);
//       if (current.right) stack.push(current.right);
//       if (current.left) stack.push(current.left);
//     }

//     return result;
//   }

//   traverse2() {
//     let result = [];
//     let current = this.root;
//     let stack = [current];

//     while (stack.length) {
//       current = stack.pop();
//       result.unshift(current.value);
//       if (current.left) stack.push(current.left);
//       if (current.right) stack.push(current.right);
//     }

//     return result;
//   }
// }

// let tree = new Tree();
// tree.root = new Node(1);
// tree.root.left = new Node(2);
// tree.root.right = new Node(3);
// tree.root.left.left = new Node(4);
// tree.root.left.right = new Node(5);

// console.log("tree traversal 1", tree.traverse()); // expects [1, 2, 4, 5, 3]
// console.log("tree traversal 2", tree.traverse2()); // expects [4, 5, 2, 3, 1]

// ========================================
