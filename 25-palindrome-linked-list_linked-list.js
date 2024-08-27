const { createLinkedList, linkedList2Arr } = require('./utils')
var isPalindrome = function (head) {
  if (head === null || head.next === null) {
    return false
  }
  const arr = []
  let current = head
  while (current) {
    arr.push(current.val)
    current = current.next
  }
  return arr.join('') === arr.reverse().join('')
};

console.log(isPalindrome(createLinkedList( [1,2,2,1])))
console.log(isPalindrome(createLinkedList( [1,2])))