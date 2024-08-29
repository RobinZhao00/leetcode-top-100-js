const copyRandomList = (head, cachedNode = new Map()) => {
  if (head === null) {
    return null;
  }
  // 检查缓存中是否已经有拷贝过的节点
  if (!cachedNode.has(head)) {
    // 创建新节点并缓存
    const copyNode = { val: head.val };
    cachedNode.set(head, copyNode);

    // 递归拷贝 next 和 random 指针
    copyNode.next = copyRandomList(head.next, cachedNode);
    copyNode.random = copyRandomList(head.random, cachedNode);
  }
  // 返回缓存中的拷贝节点
  return cachedNode.get(head);
};