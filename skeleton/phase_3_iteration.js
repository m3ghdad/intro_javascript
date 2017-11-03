Array.prototype.bubbleSort = function() {
  isSorted = false;

  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < this.length - 1); i++) {
      if (this[i] > this[i + 1]) {
        [this[i], this[i + 1] = this[i + 1], this[i]];
        isSorted = false;
      }
    }
  }
  return this;
};

String.prototype.substrings = function() {
  let subs = [];

  for (let i = 0; i < this.length; i++) {
    for (let l = 1; (i + l) <= this.length; l++) {
      subs.push(this.substring(i, i + l));
    }
  }
  return subs;
};
