const subarraySum = function (nums, k) {
  const sumMap = new Map()
  sumMap.set(0, 1);
  let count = 0;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    const res = sum - k
    if (sumMap.has(res)) {
      count += sumMap.get(res)
    }
    sumMap.set(sum, (sumMap.has(sum) ? sumMap.get(sum) : 0) + 1)
  }
  return count
};


console.log(subarraySum([1, 2, 3], 3))
console.log(subarraySum([1, 1, 1], 2))