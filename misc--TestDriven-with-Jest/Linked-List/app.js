const LinkedList = require("./LinkedList");

const ll = LinkedList.fromValues(10, 20, 30, 40);

ll.print();
ll.insertAtIndex(3, 60);
ll.removeAtIndex(2);
ll.print();
