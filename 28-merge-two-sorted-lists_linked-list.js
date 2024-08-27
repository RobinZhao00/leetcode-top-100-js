var mergeTwoLists = function (list1, list2) {
  const dummy = new ListNode(null)
  let current = dummy
  while (list2 !== null && list1 !== null) {
    if (list1.val <= list2.val) {
      current.next = list1
      list1 = list1.next
    } else {
      current.next = list2
      list2 = list2.next
    }
  }
  current.next = list1 === null ? list2: list1
  return dummy.next
};

// [1,3,5]
// [1,2,4]

const mergeTwoArr = (arr01, arr02) => {
  const result = []
  const minLength = Math.min(arr01.length, arr02.length)
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
  // // 将剩余的部分直接推入结果数组中
  // while (count01 < arr01.length) {
  //   result.push(arr01[count01]);
  //   count01++;
  // }
  //
  // while (count02 < arr02.length) {
  //   result.push(arr02[count02]);
  //   count02++;
  // }

  return result.concat(arr01.slice(count01)).concat(arr02.slice(count02));

  return result;
}

console.log(mergeTwoArr([1,3,5], [1,2,4]))