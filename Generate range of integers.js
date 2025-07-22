function generateRange(min, max, step){
  res = [];
  while (min <= max) {
    res.push(min);
    min += step
  }
  return res;
}
console.log(generateRange(1, 10, 1));
console.log(generateRange(-10, 1, 1));
console.log(generateRange(1, 15, 20));
