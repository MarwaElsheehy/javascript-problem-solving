function findShort(s){
  const words = s.split(' ');
  let shortest = words[0];

  for (let word of words) {
    if (word.length < shortest.length) {
      shortest = word
    }
  }
  return shortest.length;
}
console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
