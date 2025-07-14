function positiveSum(arr) {
  const positiveNumbers = arr.filter(num => num >= 0);
  return positiveNumbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(positiveSum([1, -4, 7, 12]));
console.log(positiveSum([-1,-2,-3,-4,-5]));
