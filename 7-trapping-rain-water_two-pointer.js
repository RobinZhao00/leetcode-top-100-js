const trap = function (height) {
  const { length } = height
  if(length <= 2) return 0;
  const stack = []
  stack.push(0)
  let sum = 0
  for (let i = 1; i < length; i++) {
    const current = height[i]
    const top = height[stack[stack.length - 1]]
    if (current < top) {
      stack.push(i)
    } else if (current === top) {
      stack.pop()
      stack.push(i)
    } else {
      while (stack.length && height[i] > height[stack[stack.length - 1]]) {
        const mid = stack[stack.length - 1]
        stack.pop()
        if (stack.length) {
          const h = Math.min(height[i], height[stack[stack.length - 1]]) - height[mid]
          const w = i - stack[stack.length - 1] - 1
          sum += h * w
        }
      }
      stack.push(i);
    }
  }
  return sum
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))
console.log(trap([4, 2, 0, 3, 2, 5]))