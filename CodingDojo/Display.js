// Display

// Create display() that uses a while loop and a runner to return a string containing all list values. Build what you wish console.log(myList) did!

// Examples:
// SLL1 = new SLL()
// SLL1.addFront(76) => Node { data: 76, next: null }
// SLL1.addFront(2) => Node { data: 2, next: Node { data: 76, next: null } }
// SLL1.display() => "2, 76"
// SLL1.addFront(11.41) => Node { data: 11.41, next: Node { data: 2, next: Node { data: 76, next: null } } }
// SLL1.display() => "11.41, 2, 76"

class SLL {
  // constructor, other methods, removed for brevity
  display() {
    let runner = this.head;
    let str = "";
    while (runner) {
      str += runner.data + ", ";
      runner = runner.next;
    }
    return str;
  }
}
