/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
const kthSmallest = function(root, k) {
  const traverse = (node) => {
    return node ? [...traverse(node.left),node.val,...traverse(node.right)]: []
  }
  return traverse(root)[k-1]
};