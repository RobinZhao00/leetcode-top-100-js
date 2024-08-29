var maxPathSum = function(root) {
  let maxSum = -Infinity

  const dfs = (node) => {
    if(node === null) {
      return 0
    }
    const left = dfs(node.left);   // 左子树提供的最大路径和
    const right = dfs(node.right); // 右子树提供的最大路径和

    const innerMaxSum = left + root.val + right; // 当前子树内部的最大路径和
    maxSum = Math.max(maxSum, innerMaxSum);
    const outputMaxSum = root.val + Math.max(0, left, right); // 当前子树对外提供的最大和

    // 如果对外提供的路径和为负，直接返回0。否则正常返回
    return outputMaxSum < 0 ? 0 : outputMaxSum;
  }
  dfs(root)
  return maxSum
};


var maxPathSum = function(root) {
  let res = -Infinity
  function dfs(root){
    // 到叶子节点
    if(!root)  return 0
    let left = dfs(root.left)
    let right = dfs(root.right)
    // 更新最大路径和
    res = Math.max(res, left + right + root.val)
    // 选取拥有最长路径的子树返回
    return Math.max(Math.max(left, right)+root.val, 0)  // 神来之笔，详看注解
  }
  dfs(root)
  return res
};