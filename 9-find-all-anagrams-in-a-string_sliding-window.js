const isAnagram = (str, target) => {
  const arr = Array.from({ length: 26 }).fill(0)
  for (let i = 0; i < target.length; i++) {
    const current = target[i]
    const match = str[i]
    const idxT = current.charCodeAt(0) - 'a'.charCodeAt(0)
    const idxM = match.charCodeAt(0) - 'a'.charCodeAt(0)
    arr[idxT] += 1
    arr[idxM] -= 1
  }
  return arr.every(ele => ele === 0)
}

var findAnagrams = function (s, p) {
  const result = []
  const { length: sLength } = s
  const { length: pLength } = p
  if (pLength > sLength) {
    return result
  }
  for (let i = 0; i <= sLength - pLength; i++) {
    const current = s.slice(i, i + pLength)
    console.log('current', current, i)
    if (isAnagram(current, p)) {
      result.push(i)
    }
  }
  return result
};

// console.log(findAnagrams("cbaebabacd", "abc"))
// console.log(findAnagrams("abab", "ab"))


const findAnagramsV2 = (s, p) => {
  const result = []
  const { length: sLength } = s
  const { length: pLength } = p
  if (pLength > sLength) {
    return result
  }
  const window = Array.from({ length: 26 }).fill(0)
  const arr = Array.from({ length: 26 }).fill(0)
  for (let i = 0; i < pLength; i++) {
    const idx = p[i].charCodeAt(0) - 'a'.charCodeAt(0)
    const sIdx = s[i].charCodeAt(0) - 'a'.charCodeAt(0)
    arr[idx] += 1
    window[sIdx] += 1
  }
  const target = arr.join(',')
  for (let i = 0; i <= sLength - pLength; i++) {
    if (i !== 0) {
      const prev = i - 1
      const next = i + pLength -1
      const prevIdx = s[prev].charCodeAt(0) - 'a'.charCodeAt(0)
      const nextIdx = s[next].charCodeAt(0) - 'a'.charCodeAt(0)
      window[prevIdx] -= 1
      window[nextIdx] += 1
    }
    if (window.join(',') === target) {
      result.push(i)
    }
  }
  return result
}


// findAnagramsV2("cbaebabacd", "abc")
console.log(findAnagramsV2("cbaebabacd", "abc"))
console.log(findAnagramsV2("abab", "ab"))