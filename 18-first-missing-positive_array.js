// 超时了
const firstMissingPositive = function (nums) {
  let max = Math.max(...new Set(nums))
  max = max > 0 ? max + 1 : 1
  let i = 1
  while (i <= max) {
    if (!nums.includes(i)) {
      return i
    } else {
      i++
    }
  }
};

const firstMissingPositiveV2 = function (nums) {
  const set = new Set(nums)
  let max = Math.max(...set)
  if (max <= 0) {
    return 1
  }
  max = max + 1
  for (let i = 1; i <= max; i++) {
    if (!set.has(i)) {
      return i
    }
  }
};

console.log(firstMissingPositive([1, 2, 0]))
console.log(firstMissingPositive([3, 4, -1, 1]))
console.log(firstMissingPositive([7, 8, 9, 11, 12]))

console.log(firstMissingPositiveV2([1, 2, 0]))
console.log(firstMissingPositiveV2([3, 4, -1, 1]))
console.log(firstMissingPositiveV2([7, 8, 9, 11, 12]))