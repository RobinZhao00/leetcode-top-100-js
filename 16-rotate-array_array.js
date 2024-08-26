// https://leetcode.cn/problems/rotate-array/description/?envType=study-plan-v2&envId=top-100-liked

var rotate = function (nums, k) {
  const { length } = nums
  const arr = [...nums]
  const step = k % length
  for (let i = 0; i < length; i++) {
    nums[(i + step) %  length] = arr[i]
  }
  return nums
};
console.log(rotate([1,2,3,4,5,6,7], 3))