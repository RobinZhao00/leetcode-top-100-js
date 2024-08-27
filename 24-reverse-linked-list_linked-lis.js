const { createLinkedList, linkedList2Arr } = require('./utils')
const reverseList = (head) => {
  if (head === null || head.next === null) {
    return head
  }

  let prev = null;
  let current = head;
  let next = null;
  while (current) {
    next = current.next
    current.next = prev
    prev = current
    current = next
  }
  return prev
}


console.log(linkedList2Arr(reverseList(createLinkedList([1,2,3,4,5]))))

// a-> b -> c
// c->b->a