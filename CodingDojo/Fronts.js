// Fronts

// Add Front
// Write a method that accepts a value and create a new node, assign it to the list head, and return a pointer to the new head node.

// Examples:
// SLL1 = new SLL()
// SLL1.addFront(18) => Node { data: 18, next: null }
// SLL1.addFront(5) => Node { data: 5, next: Node { data: 18, next: null } }
// SLL1.addFront(73) => Node { data: 73, next: Node { data: 5, next: Node { data: 18, next: null } } }

class SinglyLinkedList {
  constructor() {
    this.head = null;
  }
  addFront(value) {
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    return this;
  }
  // Remove Front
  // Write a method to remove the head node and return the new list head node. If the list is empty, return null.

  // Examples:
  // SLL1 = new SLL()
  // SLL1.addFront(18).addFront(5).addFront(73)
  // SLL1.removeFront() => Node { data: 5, next: Node { data: 18, next: null } }
  // SLL1.removeFront() => Node { data: 18, next: null }
  // SLL1.removeFront() => null

  removeFront() {
    if (this.head === null) {
      return null;
    }
    this.head = this.head.next;
    return this;
  }
  // Front
  // Write a method to return the value (not the node) at the head of the list. If the list is empty, return null.

  // Examples:
  // SLL1 = new SLL()
  // SLL1.addFront(18).addFront(5).addFront(73)
  // SLL1.front() => 73
  // SLL1.removeFront()
  // SLL1.front() => 5
  // SLL1.removeFront()
  // SLL1.front() => 18
  // SLL1.removeFront()
  // SLL1.front() => null

  front() {
    if (this.head === null) {
      return null;
    }
    return this.head.data;
  }
  // Contains
  // Write a method that accepts a value and returns whether that value is found within the list.

  // Examples:
  // SLL1 = new SLL()
  // SLL1.addFront(18).addFront(5).addFront(73)
  // SLL1.contains(5) => true
  // SLL1.contains(10) => false

  contains(value) {
    let runner = this.head;
    while (runner) {
      if (runner.data === value) {
        return true;
      }
      runner = runner.next;
    }
    return false;
  }
  //
}

// Remove Front
// Write a method to remove the head node and return the new list head node. If the list is empty, return null.

// Examples:
// SLL1.removeFront() => Node { data: 5, next: Node { data: 18, next: null } }
// SLL1.removeFront() => Node { data: 18, next: null }

class SLL {
  // constructor, other methods, removed for brevity
  removeFront() {
    if (this.head === null) {
      return null;
    }
    this.head = this.head.next;
    return this;
  }
}

// Front
// Write a method to return the value (not the node) at the head of the list. If the list is empty, return null.

// Examples:
// SLL1.front() => 18
// SLL1.removeFront() => null
// SLL1.front() => null

class SLL {
  // constructor, other methods, removed for brevity
  removeFront() {
    if (this.head === null) {
      return null;
    }
    this.head = this.head.next;
    return this;
  }
}
