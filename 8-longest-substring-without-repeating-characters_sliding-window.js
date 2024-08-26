const lengthOfLongestSubstring = (str) => {
  let maxLength = 0
  let arr = []
  for (let i = 0; i < str.length; i++) {
    const current = str[i]
    const idx = arr.indexOf(current)
    if (idx === -1) {
      arr.push(current)
    } else {
      arr = [...arr.slice(idx + 1), current]
    }
    maxLength = Math.max(maxLength, arr.length)
  }
  return maxLength
};

console.log(lengthOfLongestSubstring("abcabcbb"))
console.log(lengthOfLongestSubstring("pwwkew"))
console.log(lengthOfLongestSubstring("bbbbb"))


const lengthOfLongestSubstringV2 = (str) => {
  let maxLength = 0
  let slow = 0
  const set = new Set()
  for (let fast = 0; fast < str.length; fast++) {
    const current = str[fast]
    while (set.has(current)) {
      set.delete(str[slow++])
    }
    set.add(current)
    maxLength = Math.max(maxLength, fast - slow + 1)
  }
  return maxLength
}


console.log(lengthOfLongestSubstringV2("abcabcbb"))
console.log(lengthOfLongestSubstringV2("pwwkew"))
console.log(lengthOfLongestSubstringV2("bbbbb"))


const lengthOfLongestSubstringV3 = (str) => {
  const map = new Map()
  let maxLength = 0
  let slow = 0
  for (let fast = 0; fast < str.length; fast++) {
    const current = str[fast]
    if (map.has(current)) {
      slow = Math.max(slow, map.get(current) + 1)
    }
    map.set(current, fast)
    maxLength = Math.max(maxLength, fast - slow + 1)
  }
  return maxLength
}

console.log(lengthOfLongestSubstringV3("abcabcbb"))
console.log(lengthOfLongestSubstringV3("pwwkew"))
console.log(lengthOfLongestSubstringV3("bbbbb"))
