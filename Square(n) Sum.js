function squareSum(numbers){
  let newArr = numbers.map((e) => e ** 2);
  return newArr.reduce((acc, curr) => acc + curr, 0);
}
console.log(squareSum([1, 2, 2]));
