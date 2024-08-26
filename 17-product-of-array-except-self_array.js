const productExceptSelf = function (nums) {
  const { length } = nums;
  const result = Array(length).fill(1)
  const pre = [...result];
  const suf = [...result];
  const ans = [...result];
  for (let i = 1; i < length; i++) {
    pre[i] = pre[i - 1] * nums[i - 1];
  }

  for (let i = length - 2; i >= 0; i--) {
    suf[i] = suf[i + 1] * nums[i + 1];
  }

  for (let i = 0; i < length; i++) {
    ans[i] = pre[i] * suf[i];
  }
  return ans;
};

console.log(productExceptSelf([1, 2, 3, 4]))
console.log(productExceptSelf([-1, 1, 0, -3, 3]))