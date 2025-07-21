function asciiSum(str) {
  return [...str].reduce((sum, char) => sum + char.charCodeAt(0), 0);
}
console.log(asciiSum("a"));
console.log(asciiSum("aaa"));
