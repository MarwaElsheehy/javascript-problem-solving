function findArray(arr1, arr2) {
  let res = [];
  if (!arr1.length || !arr2.length) return res;

  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] < arr1.length) {
      res.push(arr1[arr2[i]]);
    }
  }
  return res;
}
console.log(findArray(['a', 'a', 'a', 'a', 'a'], [2, 4]));
console.log(findArray([0, 1, 5, 2, 1, 8, 9, 1, 5], [1, 4, 7]));
