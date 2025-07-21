function noBoringZeros(n) {
  while (n % 10 === 0 && n !== 0) {
    n /= 10;
  }
  return n;
}
console.log(noBoringZeros(960000));
console.log(noBoringZeros(1050));
