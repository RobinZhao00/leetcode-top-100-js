// https://leetcode.cn/problems/two-sum/description


const twoSum = function (nums, target) {
  const result = {}
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i] // 获取当前元素
    const res = target - current // 获取余数
    if (result[res]) {
      return [result[res][0], i]
    } else {
      result[current] = [...(result[current] || []), i]
    }
  }
  return []
};