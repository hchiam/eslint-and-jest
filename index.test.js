/* eslint-disable require-jsdoc */

const index = require('./index.js');
// const {add} = require('./index.js');

describe('index', () => {
  it('can add properly', () => {
    expect(index.add(1, 2)).toBe(3);
    // expect(add(1, 2)).toBe(3);
  });
});
