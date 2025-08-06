function solve(arr) {
  for (let num of arr) {
    if (!arr.includes(-num)) {
      return num;
    }
  }
}
console.log(solve([1, -1, 2, -2, 3]));
console.log(solve([-3, 1, 2, 3, -1, -4, -2]));
