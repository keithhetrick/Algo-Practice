// 206. Reverse Linked List
// https://leetcode.com/problems/reverse-linked-list/

// Given the head of a singly linked list, reverse the list, and return the reversed list.

const reverseList = (head) => {
  let prev = null;
  let current = head;
  let next = null;

  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  console.log("\nREVERSED LIST: ", prev);
  return prev;
};
reverseList([1, 2, 3, 4, 5]); // expects [5,4,3,2,1]
reverseList([1, 2]); // expects [2,1]
reverseList([]); // expects []
