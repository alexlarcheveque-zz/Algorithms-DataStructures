/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root, deep) {
  let level = [];

  let roll = (node, deep) => {
    //returns nothing if there is a null value
    if (!node) return;

    //adds array level for every new row
    if (!level[deep]) {
      level[deep] = [];
    }

    //Inserts value of current row into the array, then recursively calls nodes on the  left and right
    level[deep].push(node.val);
    roll(node.left, deep + 1);
    roll(node.right, deep + 1);
  };

  roll(root, 0);
  return level.reverse();
};
