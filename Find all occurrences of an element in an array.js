function findAll(arr, n) {
  const result = [];
  arr.forEach((val, idx) => {
    if (val === n) result.push(idx);
  });
  return result;
}
console.log(findAll(findAll([6, 9, 3, 4, 3, 82, 11], 3)));
