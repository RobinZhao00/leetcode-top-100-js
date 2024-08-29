const rightSideView = function (root) {
  const res = []
  const queue = []
  if (root === null) {
    return res
  }
  queue.push(root)
  while (queue.length) {
    const { length } = queue
    const currentLever = []
    for (let i = 0; i < length; i++) {
      const node = queue.shift()
      currentLever.push(node.val)
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
    res.push(currentLever)
  }
  return res.map(item => item[item.length - 1])
};