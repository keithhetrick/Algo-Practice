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
