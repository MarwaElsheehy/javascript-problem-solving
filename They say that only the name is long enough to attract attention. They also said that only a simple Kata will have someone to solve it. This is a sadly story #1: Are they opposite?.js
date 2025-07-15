function isOpposite(s1, s2) {
  if (!s1 || !s2 || s1.length !== s2.length) return false;
  
  for (let i = 0; i < s1.length; i++) {
    if (s1[i].toLowerCase() !== s2[i].toLowerCase()) return false;
    if (s1[i] === s2[i]) return false;
  }
  return true;
}
console.log(isOpposite("ab", "AB"));
console.log(isOpposite("Ab", "cD"));


function isOpposite(s1, s2) {
  if (!s1 || s1.length !== s2.length) return false;
  return [...s1].every((c, i) => c !== s2[i] && c.toLowerCase() === s2[i].toLowerCase());
}
