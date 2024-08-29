const getAncestors = (node, target, ancestors = []) => {
  if (node === null) {
    return null;
  }
  ancestors.push(node);
  if (node.val === target) {
    return ancestors;
  }
  const leftResult = getAncestors(node.left, target, ancestors);
  if (leftResult) {
    return leftResult;
  }
  const rightResult = getAncestors(node.right, target, ancestors);
  if (rightResult) {
    return rightResult;
  }
  ancestors.pop();

  return null;
}

const lowestCommonAncestor = function (root, p, q) {
  const ancestorsP = getAncestors(root, p.val);
  const ancestorsQ = getAncestors(root, q.val);
  let count = 0
  for (let i = 0; i < ancestorsP.length; i++) {
    if (ancestorsP[i] && ancestorsQ[i] && ancestorsP[i].val === ancestorsQ[i].val) {
      count++
    }
  }
  return ancestorsP[count -1]
};