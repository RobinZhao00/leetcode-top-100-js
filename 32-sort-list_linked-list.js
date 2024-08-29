const { createLinkedList, linkedList2Arr, ListNode } = require('./utils')

const sortList = function(head) {
  if (!head || !head.next) return head;

  // 使用快慢指针找到链表中点
  let slow = head, fast = head, prev = null;
  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  // 将链表切断，形成两个独立的子链表
  prev.next = null;

  // 递归地对两个子链表进行排序
  const l1 = sortList(head);
  const l2 = sortList(slow);

  // 合并两个排序后的子链表
  return merge(l1, l2);
};

// 合并两个已排序的链表
const merge = function(l1, l2) {
  const dummy = new ListNode(0);
  let current = dummy;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }

  current.next = l1 ? l1 : l2;

  return dummy.next;
};
