const { createLinkedList, linkedList2Arr, ListNode } = require('./utils')
const reverseListSegment = (head, k) => {
  let prev = null;
  let current = head;
  while (k--) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};

const reverseKGroup = function (head, k) {
  const dummyHead = new ListNode(0, head);
  let current = dummyHead;
  let prevGroupEnd = dummyHead;

  while (true) {
    // 检查是否有足够的节点可以反转
    let count = 0;
    current = prevGroupEnd;
    while (current.next && count < k) {
      current = current.next;
      count++;
    }
    if (count < k) break;

    // 反转 k 个节点
    let groupStart = prevGroupEnd.next;
    let groupEnd = current.next;
    current.next = null;

    prevGroupEnd.next = reverseListSegment(groupStart, k);

    // 恢复链表连接
    groupStart.next = groupEnd;
    prevGroupEnd = groupStart;
  }

  return dummyHead.next;
};

console.log(linkedList2Arr(reverseKGroup(createLinkedList([1,2,3,4,5]), 2)))
console.log(linkedList2Arr(reverseKGroup(createLinkedList([1,2,3,4,5]), 3)))
console.log(linkedList2Arr(reverseKGroup(createLinkedList([1,2,3,4,5,6]), 2)))
console.log(linkedList2Arr(reverseKGroup(createLinkedList([1,2,3,4,5,6]), 3)))



const reverseArr = (arr, k) => {
  const result = []
  let start = 0
  let end = k
  while (end <= arr.length) {
    result.push(...arr.slice(start, end).reverse())
    start += k
    end += k
  }
  result.push(...arr.slice(start))
  return result
}

console.log(reverseArr([1,2,3,4,5], 2))
console.log(reverseArr([1,2,3,4,5], 3))
console.log(reverseArr([1,2,3,4,5,6], 2))
console.log(reverseArr([1,2,3,4,5,6], 3))