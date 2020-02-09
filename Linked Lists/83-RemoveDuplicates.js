//Time --> O(n)
//Space --> O(1)

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  let num = null;
  let begHead = head;

  if (!head) {
    return null;
  }

  while (head.next) {
    if (head.next.val == head.val) {
      head.next = head.next.next;
    } else {
      head = head.next;
    }
  }
  return begHead;
};
