function solve(arr) {
  const result = [];
  let max = -Infinity;

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] > max) {
      result.unshift(arr[i]);
      max = arr[i];
    }
  }

  return result;
}
console.log(solve([1, 21, 4, 7, 5]));
