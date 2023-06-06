// 876. Middle of the Linked List
// https://leetcode.com/problems/middle-of-the-linked-list/

// Given the head of a singly linked list, return the middle node of the linked list.

// If there are two middle nodes, return the second middle node.

function middleNode(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return console.log(slow);
}
middleNode([1, 2, 3, 4, 5]); // expects [3,4,5]
middleNode([1, 2, 3, 4, 5, 6]); // expects [4,5,6]
