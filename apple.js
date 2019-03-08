//create a module that exports a function that takes a number as
// a parameter and stores it in a list.
// The list should not be accessible from outside the module.

// var myModule (function (num)) {
//   var list = [num]
// }

var list = []

var comparator = function(a, b) {
  return a - b;
}

module.exports = {
  save: function(num) {
    list.push(num)
    // console.log(list);
  },
  sorted: function() {
    return list.sort(comparator)
  }
}