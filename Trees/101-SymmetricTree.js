/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (root == null) return true;

  let left = root.left;
  let right = root.right;

  return treeNodes(left, right);
};

var treeNodes = function(left, right) {
  if (!left && !right) return true;
  if (!left || !right) return false;
  if (left.val !== right.val) return false;

  return treeNodes(left.left, right.right) && treeNodes(left.right, right.left);
};
