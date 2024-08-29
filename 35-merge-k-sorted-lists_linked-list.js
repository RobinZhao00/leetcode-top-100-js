const { ListNode } = require('./utils')

const getListNodeVals = (head) => {
  const result = []
  while (head) {
    result.push(head.val)
    head = head.next
  }
  return result
}

const mergeKLists = function (lists) {
  const dummyHead = new ListNode(0)
  let current = dummyHead
  const nodeVals = lists
  .reduce((prev, curr) => [...prev, ...getListNodeVals(curr)], [])
  .sort((a, b) => a - b)
  for (let i = 0; i < nodeVals.length; i++) {
    current.next = new ListNode(nodeVals[i])
    current = current.next
  }
  return dummyHead.next
};

const mergeArr = (arr01, arr02) => {
  const result = []
  let count01 = 0;
  let count02 = 0
  while (count01 < arr01.length && count02 < arr02.length) {
    if (arr01[count01] <= arr02[count02]) {
      result.push(arr01[count01]);
      count01++;
    } else {
      result.push(arr02[count02]);
      count02++;
    }
  }
  return result.concat(arr01.slice(count01)).concat(arr02.slice(count02));
}

const mergeArrs = (arr) => arr.reduce((prev, curr) => mergeArr(prev, curr), [])

console.log(mergeArrs([[1,4,5],[1,3,4],[2,6]]));