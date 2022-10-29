// Trees To Do 2

// This is a function that will be used to create a new tree object
// It takes a single argument for the type of tree
let makeTree = function (type) {
  let newTree = {};
  newTree.type = type;
  newTree.height = 0;
  newTree.leaves = 0;
  newTree.grow = function () {
    this.height += 1;
    this.leaves += 1;
  };
  return newTree;
};

// Add the additional methods discussed to our BST class implementation:
// BST: Height
// BST: Is Balanced
// Array to BST
// Closest Common Ancestor

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BST {
  constructor() {
    this.root = null;
  }
  // BST: ADD
  // Create an add(val) method on the BST object to add new value to the tree. This entails creating a BTNode with this value and connecting it at the appropriate place in the tree. Unless specified otherwise, BSTs can contain duplicate values.

  add(value) {
    if (this.root) {
      let runner = this.root;
      while (runner) {
        if (value > runner.value) {
          if (runner.right) {
            runner = runner.right;
          } else {
            runner.right = new Node(value);
            return this;
          }
        } else {
          if (runner.left) {
            runner = runner.left;
          } else {
            runner.left = new Node(value);
            return this;
          }
        }
      }
    }
    this.root = new Node(value);
    return this;
  }
  // BST: CONTAINS
  //  Create a contains(val) method on BST that returns whether the tree contains a given value. Take advantage of the BST structure to make this a much more rapid operation than SList.contains() would be.

  contains(value) {
    let runner = this.root;
    while (runner) {
      if (value == runner.value) {
        return true;
      }
      if (value < runner.value) {
        if (!runner.left) {
          return false;
        }
        runner = runner.left;
      } else {
        if (!runner.right) {
          return false;
        }
        runner = runner.right;
      }
    }
    return false;
  }
  // BST: MIN
  // Create a min() method on the BST class that returns the smallest value found in the BST.

  min() {
    let runner = this.root;
    let min = this.root.value;
    while (runner.left) {
      if (runner.left.value < min) {
        min = runner.left.value;
      }
      runner = runner.left;
    }
    return min;
  }
  // BST: MAX
  // Create a max() BST method that returns the largest value contained in the binary search tree.

  max() {
    let runner = this.root;
    let max = this.root.value;
    while (runner.right) {
      if (runner.right.value > max) {
        max = runner.right.value;
      }
      runner = runner.right;
    }
    return max;
  }
  // BST: SIZE
  // Write a size() method that returns the number of nodes (values) contained in the tree.

  size() {
    if (this.root === null) {
      return 0;
    }
    function sizeHelp(runner) {
      if (!runner) {
        return 0;
      }
      return 1 + sizeHelp(runner.left) + sizeHelp(runner.right);
    }
    return sizeHelp(this.root);
  }
  // BST: IS EMPTY
  // Create an isEmpty() method to return whether the BST is empty (whether it contains no values).

  isEmpty() {
    if (this.root) {
      return false;
    }
    return true;
  }
  // BST: Height
  // Build a height() method on the BST object that returns the total height of the tree – the longest sequence of nodes from the root node to leaf node.

  height() {
    if (this.root === null) {
      return 0;
    }
    function heightHelp(runner) {
      if (!runner) {
        return 0;
      }
      return 1 + Math.max(heightHelp(runner.left), heightHelp(runner.right));
    }
    return heightHelp(this.root);
  }
  // BST: Is Balanced
  // Write isbalanced() method to indicate whether a BST is balanced. For this challenge, consider a tree balanced when all nodes are balanced. A BTNode is balanced if heights of its left subtree and right subtree differ by at most one.

  isBalanced() {
    if (this.root === null) {
      return true;
    }
    function isBalancedHelp(runner) {
      if (!runner) {
        return 0;
      }
      let left = isBalancedHelp(runner.left);
      let right = isBalancedHelp(runner.right);
      if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
        return -1;
      }
      return 1 + Math.max(left, right);
    }
    return isBalancedHelp(this.root) !== -1;
  }
  // Array to BST
  // Given an array that is sorted in ascending order, return a BST object that is height-balanced.

  arrayToBST(arr) {
    if (arr.length === 0) {
      return null;
    }
    let mid = Math.floor(arr.length / 2);
    let root = new Node(arr[mid]);
    root.left = this.arrayToBST(arr.slice(0, mid));
    root.right = this.arrayToBST(arr.slice(mid + 1));
    return root;
  }
  // Closest Common Ancestor
  // Given a BST and two contained values, return the value of the closest common ancestor node. For each node, the chain up to root (including self) represents that node’s ancestry. Return the value of the node in both ancestor chains that is closest to both.

  closestCommonAncestor(value1, value2) {
    let runner = this.root;
    while (runner) {
      if (value1 < runner.value && value2 < runner.value) {
        runner = runner.left;
      } else if (value1 > runner.value && value2 > runner.value) {
        runner = runner.right;
      } else {
        return runner.value;
      }
    }
  }
}
// creating a new BST
tree = new BST();

// adding some nodes
tree.add(10).add(20).add(5).add(7).add(21).add(2).add(9).add(17).add(6).add(4);

// searching for value
console.log(tree.contains(17));
// searching for value that doesn't exist in the tree
console.log(tree.contains("hello"));

// testing min
console.log(tree.min());
// testing max
console.log(tree.max());

// testing size
console.log(tree.size());

//testing isEmpty
console.log(tree.isEmpty());
emptyTree = new BST();
console.log(emptyTree.isEmpty());

// printing our tree
console.log(tree);

// testing height
console.log(tree.height());

// testing isBalanced
console.log(tree.isBalanced());
tree.add(1);
console.log(tree.isBalanced());

// testing arrayToBST
console.log(tree.arrayToBST([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// testing closestCommonAncestor
console.log(tree.closestCommonAncestor(6, 9));
console.log(tree.closestCommonAncestor(6, 21));
console.log(tree.closestCommonAncestor(4, 9));
