function findMissingNumber(sequence) {
  const nums = sequence.split(" ");

  for (let n of nums) {
    if (!/^\d+$/.test(n)) return 1;
  }

  const unique = new Set(nums.map(Number));

  const max = Math.max(...unique);

  for (let i = 1; i <= max; i++) {
    if (!unique.has(i)) return i;
  }

  return 0;
}
console.log(findMissingNumber("1 2 3 5"));
