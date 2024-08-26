const maxSubArray = function(nums) {
  let pre = 0;
  let max = nums[0];
  for (let i = 0; i < nums.length; i++) {
    pre = Math.max(pre + nums[i], nums[i]);
    max = Math.max(max, pre);
  }
  return max;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))