class ListNode {
  constructor(val, next) {
    this.val = val; // 节点存储的值
    this.next = next || null;   // 指向下一个节点的指针
  }
}

const createLinkedList = (elements) => {
  let head = null;
  let current = null;

  for (const val of elements) {
    const node = new ListNode(val);
    if (!head) {
      head = node; // 第一个节点成为头节点
    } else {
      current.next = node; // 将新节点连接到链表末尾
    }
    current = node; // 移动当前节点指针
  }

  return head;
}

const findIntersection = (arrA, arrB) => {
  let i = arrA.length - 1;
  let j = arrB.length - 1;
  let intersection = [];

  // 从尾部逐一对比
  while (i >= 0 && j >= 0) {
    if (arrA[i] === arrB[j]) {
      intersection.unshift(arrA[i]);  // 在前面插入
      i--;
      j--;
    } else {
      break;  // 一旦找到不匹配的，就停止
    }
  }

  return intersection;
}

const createIntersectingLists = (listA, listB) => {
  let intersection = findIntersection(listA, listB);

  if (intersection.length === 0) {
    // 如果没有公共部分，直接生成两个独立链表
    return [createLinkedList(listA), createLinkedList(listB)]
  }

  // 生成相交部分
  let intersectHead = createLinkedList(intersection);

  // 生成第一个链表，并连接相交部分
  let headA = createLinkedList(listA.slice(0, listA.length - intersection.length));
  if (headA) {
    let currentA = headA;
    while (currentA.next !== null) {
      currentA = currentA.next;
    }
    currentA.next = intersectHead;
  } else {
    headA = intersectHead;
  }

  let headB = createLinkedList(listB.slice(0, listB.length - intersection.length));
  if (headB) {
    let currentB = headB;
    while (currentB.next !== null) {
      currentB = currentB.next;
    }
    currentB.next = intersectHead;
  } else {
    headB = intersectHead;
  }

  return [headA, headB];
}

const linkedList2Arr = (list) => {
  const arr = []
  let current = list
  while (current !== null) {
    arr.push(current.val)
    current = current.next
  }
  return arr
}

module.exports = {
  createLinkedList, createIntersectingLists, linkedList2Arr, ListNode
}