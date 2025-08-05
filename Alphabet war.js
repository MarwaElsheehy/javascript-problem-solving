function alphabetWar(fight) {
  const leftSide = { w: 4, p: 3, b: 2, s: 1 };
  const rightSide = { m: 4, q: 3, d: 2, z: 1 };

  let score = 0;
  for (let char of fight) {
    if (leftSide[char]) score += leftSide[char];
    else if (rightSide[char]) score -= rightSide[char];
  }
  if (score > 0) return "Left side wins!";
  else if (score < 0) return "Right side wins!";
  else return "Let's fight again!";
}
console.log(alphabetWar("z"));
console.log(alphabetWar("zdqmwpbs"));
