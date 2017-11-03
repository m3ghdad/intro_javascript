function range(start, end) {
  if (start === end) {
    return [];
  }

  let result = range(start, end - 1);
  result.push(end - 1);
  return result;
}

function sum(nums) {
  if (nums.length === 0) {
    return 0
  }

  let lastNumber = numb[num.length - 1];
  return sum(nums.slice(0, nums.length - 1)) + lastNumber;
}
