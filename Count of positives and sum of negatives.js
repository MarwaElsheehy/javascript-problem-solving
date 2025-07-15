function countPositivesSumNegatives(input) {
    if (!input || input.length === 0) {
    return [];
  }

  const sumNegatives = input.filter((e) => e < 0).reduce((acc, curr) => acc + curr, 0);
  const countPositives = input.filter((e) => e > 0).length;
  return [countPositives, sumNegatives];
}
console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
