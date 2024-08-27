const addTwoNumbers = function (l1, l2) {
  const dummy = new ListNode(0); // 使用0而不是null作为初始化值
  let current = dummy;
  let carry = 0; // 更名为carry更符合进位的语义

  while (l1 !== null || l2 !== null || carry !== 0) {
    let val1 = l1 ? l1.val : 0; // 如果l1为null，值为0
    let val2 = l2 ? l2.val : 0; // 如果l2为null，值为0
    let sum = val1 + val2 + carry; // 计算总和

    carry = Math.floor(sum / 10); // 计算新的进位
    let newVal = sum % 10; // 计算当前位的值
    current.next = new ListNode(newVal); // 创建新节点
    current = current.next; // 移动到下一个节点

    if (l1 !== null) l1 = l1.next; // 移动到l1的下一个节点
    if (l2 !== null) l2 = l2.next; // 移动到l2的下一个节点
  }

  return dummy.next; // 返回结果链表的头节点
};