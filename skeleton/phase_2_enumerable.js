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
