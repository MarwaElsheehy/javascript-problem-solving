function sumOfDifferences(arr) {
  if (arr.length < 2) return 0;

  const sorted = arr.slice().sort((a, b) => b - a);
  let sum = 0;

  for (let i = 0; i < sorted.length - 1; i++) {
    sum += sorted[i] - sorted[i + 1];
  }

  return sum;
}
console.log(sumOfDifferences([2, 1, 10]));
