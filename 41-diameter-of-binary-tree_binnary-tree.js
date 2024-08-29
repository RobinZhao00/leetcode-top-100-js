const diameterOfBinaryTree = function(root) {
  let ans = -Infinity;
  //计算以node为根节点的树中的最长链长度
  function traversal(node) {
    if(!node) return -1;
    let leftRes = traversal(node.left);
    let rightRes = traversal(node.right);
    ans = Math.max(ans, leftRes + rightRes + 2);
    return Math.max(leftRes, rightRes) + 1;
  }
  traversal(root);
  return ans;
};