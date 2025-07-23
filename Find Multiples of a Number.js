function findMultiples(integer, limit) {
  const result = [];
  for (let i = integer; i <= limit; i += integer) {
    result.push(i);
  }
  return result;
}
console.log(findMultiples(2, 6));
console.log(findMultiples(5, 25));
