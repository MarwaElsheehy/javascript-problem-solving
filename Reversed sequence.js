function reverseSeq(n) {
  return Array.from({ length: n }, (_, i) => n - i);
}
console.log(reverseSeq(5));
