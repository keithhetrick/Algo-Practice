// 206. Reverse Linked List
// https://leetcode.com/problems/reverse-linked-list/

// Given the head of a singly linked list, reverse the list, and return the reversed list.

const reverseList = (head) => {
  // if (!head || !head.next) return head;
  // let temp = reverseList(head.next);
  // head.next.next = head;
  // head.next = undefined;
  // return temp;

  if (head === null) return head;

  let node = head;
  let prev = null;

  while (node) {
    let saveNext = node.next;
    node.next = prev;
    prev = node;
    node = saveNext;
  }

  return prev;

  // if (!head || !head.next) return head;
  // let prev = null;

  // while (head) {
  //   nextNode = head.next;
  //   head.next = prev;
  //   prev = head;
  //   head = nextNode;
  // }
  // return prev;
};
reverseList([1, 2, 3, 4, 5]); // expects [5,4,3,2,1]
reverseList([1, 2]); // expects [2,1]
reverseList([]); // expects []
