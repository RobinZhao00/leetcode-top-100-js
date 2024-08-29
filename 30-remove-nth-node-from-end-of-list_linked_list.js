const removeNthFromEnd = function (head, n) {
  const dummyHead = new ListNode(0, head)
  let slow = dummyHead
  let fast = dummyHead
  // 快指针 先走
  while (n--) {
    fast = fast.next
  }
  // 快慢同时走
  while (fast.next) {
    slow = slow.next
    fast = fast.next
  }
  // 删除
  slow.next = slow.next.next
  return dummyHead.next
}
