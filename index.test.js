/* eslint-disable require-jsdoc */

const {solutionWrapper} = require('./index.js');

describe('the solution', () => {
  it('works', () => {
    expect(solutionWrapper(1, 2))
        .toStrictEqual(3);
  });
});

// function ListNode(val) {
//   this.val = val;
//   this.next = null;
// }

// function TreeNode(val) {
//   this.val = val;
//   this.left = this.right = null;
// }
