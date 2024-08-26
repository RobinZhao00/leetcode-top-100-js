// https://leetcode.cn/problems/sliding-window-maximum/?envType=study-plan-v2&envId=top-100-liked
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const maxSlidingWindow = function (nums, k) {
  const { length } = nums;
  if (length === 0 || k === 0) return [];

  let maxVal = Math.max(...nums.slice(0, k));
  const arr = [maxVal];
  let begin = 0;

  for (let end = k; end < length; end++) {
    const current = nums[end];
    begin = end - k + 1;

    if (current >= maxVal) {
      maxVal = current;
    } else if (nums[begin - 1] === maxVal) {
      maxVal = Math.max(...nums.slice(begin, end + 1));
    }

    arr.push(maxVal);
  }
  return arr
}

// 超时了
console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3))


const maxSlidingWindowV2 = function(nums, k) {
  const result = [];
  const queue = [];
  for (let i = 0; i < nums.length; i++) {
    while (queue.length && nums[queue[queue.length - 1]] <= nums[i]) {
      queue.pop(); // 维护 q 的单调性
    }
    queue.push(i); // 入队
    // 2. 出
    if (i - queue[0] >= k) { // 队首已经离开窗口了
      queue.shift(); // 力扣没有 Deque，不过这样写也挺快的
    }
    // 3. 记录答案
    if (i >= k - 1) {
      // 由于队首到队尾单调递减，所以窗口最大值就是队首
      result.push(nums[queue[0]]);
    }
  }
  return result;
};

// 超时了
console.log(maxSlidingWindowV2([1, 3, -1, -3, 5, 3, 6, 7], 3))