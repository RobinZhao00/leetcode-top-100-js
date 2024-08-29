var isSymmetric = function (root) {
  if (root === null) {
    return true
  }
  const isSameNode = (left, right) => {
    if (left === null && right === null) {
      return true
    }
    if (left === null || right === null) {
      return false
    }
    if (left.val !== right.val) {
      return false
    }
    return isSameNode(left.left, right.right) && isSameNode(left.right, right.left)
  }
  return isSameNode(root.left, root.right)
}