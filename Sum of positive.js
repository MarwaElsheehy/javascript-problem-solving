function positiveSum(arr) {
  const positiveNumbers = arr.filter(num => num >= 0);
  if (positiveNumbers.length === 0) {
    return 0;
  } else {
    return positiveNumbers.reduce((acc, curr) => acc + curr);
  }
}
console.log(positiveSum([1, -4, 7, 12]));
console.log(positiveSum([-1,-2,-3,-4,-5]));
