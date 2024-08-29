// 二分搜索树（英语：Binary Search Tree），也称为 二叉查找树 、二叉搜索树 、有序二叉树或排序二叉树。满足以下几个条件：
// 若它的左子树不为空，左子树上所有节点的值都小于它的根节点。
// 若它的右子树不为空，右子树上所有的节点的值都大于它的根节点。


const sortedArrayToBST = function (nums) {
  const helper = (arr, leftIdx, rightIdx) => {
    if (leftIdx > rightIdx) {
      return null
    }
    const midIdx = Math.floor((leftIdx + rightIdx) / 2)
    const root = new TreeNode(arr[midIdx])
    root.left = helper(arr, leftIdx, midIdx - 1)
    root.right = helper(arr, midIdx + 1, rightIdx)
    return root
  }

  return helper(nums, 0, nums.length - 1)
};