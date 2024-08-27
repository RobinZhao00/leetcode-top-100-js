const { createIntersectingLists } = require('./utils')
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  const visited = new Set();
  let temp = headA;
  while (temp !== null) {
    visited.add(temp);
    temp = temp.next;
  }
  temp = headB;
  while (temp !== null) {
    if (visited.has(temp)) {
      console.log(`Intersected at '${temp.value}'`)
      return temp;
    }
    temp = temp.next;
  }
  console.log('No intersection')
  return null;
};




getIntersectionNode(...createIntersectingLists([4, 1, 8, 4, 5], [5, 6, 1, 8, 4, 5]))
getIntersectionNode(...createIntersectingLists([1, 9, 1, 2, 4], [3, 2, 4]))
getIntersectionNode(...createIntersectingLists([2, 6, 4], [1, 5]))