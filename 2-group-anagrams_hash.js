// https://leetcode.cn/problems/group-anagrams/description

const formatStr = (str) => {
  const arr = Array.from({ length: 26 }).map(() => 0)
  for (let i = 0; i < str.length; i++) {
    const current = str[i].charCodeAt(0) - 'a'.charCodeAt(0)
    arr[current] += 1
  }
  return arr.join(',')
}

const groupAnagrams = function (strs) {
  const map = new Map()
  for (let i = 0; i < strs.length; i++) {
     const formatedStr = formatStr(strs[i])
     map.set(formatedStr, map.has(formatedStr) ? [...map.get(formatedStr), strs[i]]: [strs[i]])
  }
  return [...map.values()]
};