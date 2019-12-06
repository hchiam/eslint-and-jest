// npm install -D google-closure-library

require("google-closure-library");

goog.require('goog.structs.Heap');

const heap = new goog.structs.Heap();
heap.insert('some key', 'some value');
console.log(heap.peek());

// things like heap:
// https://github.com/google/closure-library/tree/master/closure/goog/structs

// and demos like advanced tooltip:
// https://google.github.io/closure-library/source/closure/goog/demos/
