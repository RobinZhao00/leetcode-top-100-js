const pathSum = function(root, targetSum) {
  let result = 0;

  // 计算从某个节点出发的路径数
  const helper = (node, target) => {
    if (node === null) {
      return;
    }
    if (node.val === target) {
      result += 1;
    }
    helper(node.left, target - node.val);
    helper(node.right, target - node.val);
  }

  // 遍历所有节点，寻找从每个节点出发的路径数
  const traverse = (node) => {
    if (node === null) {
      return;
    }
    helper(node, targetSum);
    traverse(node.left);
    traverse(node.right);
  }

  traverse(root);
  return result;
};