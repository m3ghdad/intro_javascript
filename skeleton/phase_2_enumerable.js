Array.prototype.myEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

Array.prototype.myMap = function(callback) {
  let myMap = [];
  for (let i = 0; i < this.length; i++) {
    myMap.push(callback(this[i]));
  }
  return myMap;
};

// Alternative method using myEach

Array.prototype.myMap = function(callback) {
  let mappedArr = [];

  this.myEach(el => mappedArr.push(callback(el)) );
  return mappedArr;
};

Array.prototype.myReduce = function(callback, initialValue) {
  let array = this;

  if (!initialValue) {
    initialValue = array[0];
    array = array.slice(1);
  }

  let result = initialValue;
  array.myEach(el => result = callback(result, el));
  return result;

};


// this method doesnt work because this has to be reassigned
// Array.prototype.myReduce = function(callback, initialValue) {
// if (!initialValue) {
//   initialValue = this[0];
//   this.slice(1);
// }
//
// this.myEach(el => result = callback(initialValue, el));
// return initialValue;
// };
