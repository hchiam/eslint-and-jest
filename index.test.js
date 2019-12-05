/* eslint-disable require-jsdoc */

const {solutionWrapper} = require('./index.js');

describe('the solution', () => {
  it('works', () => expect(solutionWrapper(1)).toStrictEqual(1));
});

// function TreeNode(val) {
//   this.val = val;
//   this.left = this.right = null;
// }
