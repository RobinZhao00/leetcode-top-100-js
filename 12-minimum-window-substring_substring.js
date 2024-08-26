/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = function (s, t) {
  let minStr = ''
  const map = {}
  for (let i = 0; i < t.length; i++) {
    const current = t[i]
    map[current] = (map[current] || 0) + 1
  }
  let slow = 0;
  let target = { ...map }
  console.log('target', target)
  for (let fast = 0; fast < s.length; fast += 1) {
    const isCover = Object.values(target).every(item => item === 0)
    if (!isCover) {
      const current = s[fast]
      if (target[current] > 0) {
        target[current] -= 1
      }
    } else {
      while (slow++ <= fast) {
        if (map[s[slow]]) {
          minStr = minStr.length - (fast - slow) > 0 ? s.substring(slow, fast) : minStr
          break;
        }
      }
    }
  }
  return minStr
};

console.log(minWindow("ADOBECODEBANC", "ABC"))