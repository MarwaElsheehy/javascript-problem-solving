function orderedCount(str) {
  const result = [];
  const seen = new Set();

  for (const char of str) {
    if (!seen.has(char)) {
      result.push([char, str.split(char).length - 1]);
      seen.add(char);
    }
  }

  return result;
}
console.log(orderedCount("abracadabra"));
