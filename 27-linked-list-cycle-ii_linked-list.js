const detectCycle = (head) => {
  if (head === null || head.next === null) {
    return null
  }
  let slow = head.next
  let fast = head.next.next
  while (fast && fast.next && fast !== slow) {
    fast = fast.next.next
    slow = slow.next
  }
  if (fast === null || fast.next === null) {
    return null
  }
  slow = head
  while (slow !== fast) {
    slow = slow.next
  }
  return slow
}

const detectCycleV2 = (head) => {
  const visited = new Set()
  let current = head
  while (current !== null) {
    if (visited.has(current)) {
      return current
    }
    visited.add(current)
    current = current.next
  }
  return null
}