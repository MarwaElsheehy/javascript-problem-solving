function divisibleBy(numbers, divisor){
  let res = []
  for (number of numbers) {
    if (number % divisor == 0) {
      res.push(number);
    }
  }
  return res;
}
