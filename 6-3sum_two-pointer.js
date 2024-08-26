const threeSum = (nums) => {
  nums.sort((a, b) => a - b)
  const { length } = nums
  const result = []
  for (let i = 0; i < length; i++) {
    const current = nums[i]
    if (nums[i - 1] === current) {
      continue;
    }
    if (current > 0) {
      return result;
    }
    let left = i + 1;
    let right = length - 1;
    while (left < right) {
      const sum = current + nums[left] + nums[right];
      if (sum < 0) {
        left++
      } else if (sum > 0) {
        right--
      } else {
        result.push([current, nums[left], nums[right]])
        while (nums[left] === nums[left + 1] && left < right) {
          left++
        }
        while (nums[right] === nums[right - 1] && left < right) {
          right--
        }
        left++;
        right--;
      }
    }
  }
  return result
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]))