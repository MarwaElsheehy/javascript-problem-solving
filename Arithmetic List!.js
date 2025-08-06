function seqlist(first, c, l) {
  const result = [];
  for (let i = 0; i < l; i++) {
    result.push(first + i * c);
  }
  return result;
}
console.log(seqlist(0, 1, 20));
