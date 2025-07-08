function sum (numbers) {
  const res = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return res;
}
console.log(sum([1, 5.2, 4, 0, -1]))
