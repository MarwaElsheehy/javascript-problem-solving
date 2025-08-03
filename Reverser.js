function reverse(n) {
  let reversed = 0;
  while (n !== 0) {
    reversed = reversed * 10 + n % 10;
    n = Math.floor(n / 10);
  }
  return reversed;
}

function reverse(n, reversed = 0) {
    if (n === 0) {
        return reversed;
    }
    return reverse(Math.floor(n / 10), reversed * 10 + n % 10);
}
console.log(reverse(1234));
