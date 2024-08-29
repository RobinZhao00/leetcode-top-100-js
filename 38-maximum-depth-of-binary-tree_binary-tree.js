var maxDepth = function (root) {
  const res = []
  const queue = []
  queue.push(root)
  if (root === null) {
    return 0
  }
  while (queue.length) {
    const { length } = queue
    const currentLevel = []
    for (let i = 0; i < length; i++) {
      const node = queue.unshift()
      currentLevel.push(node.val)
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
    queue.push(currentLevel)
  }
  return res.length
};

const maxDepth = (root, depth = 0) => {
  if (root === null) {
    return depth
  }
  return Math.max(maxDepth(root.left, depth), maxDepth(root.left, depth)) + 1
}