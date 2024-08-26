const longestConsecutive = (nums) => {
  const { length } = nums;
  if (length <=1) {
    return length;
  }

  nums = [...new Set(nums)].sort((a, b) => a - b)

  let maxLength = 1;
  let slow = 0;

  for (let fast = 1; fast < length; fast++) {
    if (nums[fast] - nums[fast - 1] === 1) {
      maxLength = Math.max(maxLength, fast - slow + 1);
    } else {
      slow = fast;
    }
  }

  return maxLength;
};



console.log(longestConsecutive([100, 4, 200, 1, 3, 2]))
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]))