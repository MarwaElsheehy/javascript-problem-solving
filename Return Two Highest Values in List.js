function twoHighest(arr) {
  let unique = [...new Set(arr)];
  unique.sort((a, b) => b - a);

  return unique.slice(0, 2);
}
console.log(twoHighest([15, 20, 20, 17]));
