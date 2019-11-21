/* eslint-disable require-jsdoc */

showMessage();

function showMessage() {
  const message = 'logging logging log';

  for (let i = 0; i < 5; i++) {
    console.log(message) // this will trigger underlining (and shows up if you run: npm run lint)
  }
}

function add(a, b) {
  return a + b;
}

module.exports = {
  add,
  showMessage,
};
