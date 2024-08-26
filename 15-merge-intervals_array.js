// https://leetcode.cn/problems/merge-intervals/?envType=study-plan-v2&envId=top-100-liked
const merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0])
  const result = [intervals[0]]
  for (let i = 1; i <= intervals.length; i++) {
    const prev = result[result.length - 1]
    const current = intervals[i - 1]
    if (current[0] > prev[1]) {
      result.push(current)
    } else {
      result[result.length - 1] = [prev[0], Math.max(prev[1],current[1])]
    }
  }
  return result
};

console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]]))
console.log(merge([[1,4],[4,5]]))
console.log(merge([[1,4],[0,4]]))