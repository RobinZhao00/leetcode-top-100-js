const { createLinkedList, linkedList2Arr, ListNode } = require('./utils')
const swapPairs = function (head) {
  // 创建一个哑节点(dummy node)，并将其 next 指向链表的头节点
  const dummyHead = new ListNode(0, head);

  // 当前节点从哑节点开始
  let current = dummyHead;

  // 当 current.next 和 current.next.next 都存在时，执行交换
  while (current.next && current.next.next) {
    // 定义两个要交换的节点：pre 和 cur
    let cur = current.next.next; // 第二个节点 (current.next.next)
    let pre = current.next; // 第一个节点 (current.next)

    // 将第一个节点的 next 指向第二个节点的 next，这一步是断开第一个节点和第二个节点的连接
    pre.next = cur.next;

    // 将第二个节点的 next 指向第一个节点，这一步将第二个节点移到第一个节点之前
    cur.next = pre;

    // 将 current 的 next 指向新的第二个节点，也就是之前的 cur，这一步将 current.next 指向交换后的第一个节点
    console.log('cur', cur.val)
    current.next = cur;

    // current 指针移动到新的位置，即 pre（之前的 current.next）
    console.log('pre', pre.val)
    current = pre;
  }

  // 返回处理后的链表，跳过哑节点
  return dummyHead.next;
};


console.log(linkedList2Arr(swapPairs(createLinkedList([1, 2, 3, 4]))))
