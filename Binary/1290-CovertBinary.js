//Time --> O(n)
//Space --> O(n)

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
  let answer = 0;
  let arrList = [];

  while (head) {
    arrList.push(head.val);
    head = head.next;
  }

  console.log(arrList);

  let count = arrList.length - 1;

  for (let i = 0; i < arrList.length; i++) {
    answer += arrList[i] * Math.pow(2, count);
    count--;
  }

  return answer;
};
