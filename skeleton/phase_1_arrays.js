// Array.prototype.uniq = function() {
//   let uniqArray = [];
//
//   for (let i = 0; i < this.lenth; i++) {
//     if (!uniqArray.includes(this[i])) {
//       uniqArray.push(this[i]);
//     }
//   }
//   return uniqArray;
// };

Array.prototype.uniq = function() {
  let uniqueArray = [];

  for (let i = 0; i < this.length; i++) {
    if (uniqueArray.indexOf(this[i]) === -1) {
      uniqueArray.push(this[i]);
    }
  }

  return uniqueArray;
};


Array.prototype.twoSum = function() {
  const sumArr = [];

  for (let i = 0; i < this.length; i++) {
    for (let j = (i + 1); j < this.length; j++) {
      if (this[i] + this[j] === 0 ) {
          sumArr.push([i, j]);
      }
    }
  }
  return sumArr;
};

// This time we've reduced the time complexity from N^2 to N
// by using a hash
Array.prototype.twoSum2 = function() {
  let pairs = [];
  const indexHash = {};

  this.forEach((el, idx) => {
    if (indexHash[el * -1]) {
      const newPairs = indexHash[el * -1].map((prevIdx) => [prevIdx, idx]);

      // remember, concat doesn't mutate the original object
      pairs = pairs.concat(newPairs);
    }

    // since we can't set a default attribute value in JavaScript,
    // we will need to check for existence first
    indexHash[el] ? indexHash[el].push(idx) : indexHash[el] = [idx];
  });

  return pairs;
};


// In ruby Arra.new(2) {Array.new(2)} => [[nil, nil], [nil, nil]]
// In JavaScript Array.from( {length: 2}, () => Array.from({length: 2}) ); => [[undefiend, undefiend], [undefiend, undefiend]]

Array.prototype.transpose = function() {
  let transposed = [];
  let dimentions = this[0].length

  cols = Array.from( {length: dimentions}, () => Array.from({length: dimentions}) )
  for (let i = 0; i < dimentions; i++) {
    for (let j = 0; j < dimentions; j++) {
      cols[j][i] = this[i][j];
    }
  }
  return cols;

}
