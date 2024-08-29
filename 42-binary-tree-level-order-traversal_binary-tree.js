const levelOrder = function (root) {
  const res = [];
  const queue = []
  if (root === null) {
    return res
  }
  queue.push(root)
  while (queue.length) {
    const { length } = queue
    const currentLevel = []
    for (let i = 0; i < length; i++) {
      const node = queue.shift()
      currentLevel.push(node.val)
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
    res.push(currentLevel)
  }
  return res
};