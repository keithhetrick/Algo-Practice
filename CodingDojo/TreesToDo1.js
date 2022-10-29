// Trees To Do 1

// Let’s build a basic Binary Search Tree. These challenges start with the following reference definitions:

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
