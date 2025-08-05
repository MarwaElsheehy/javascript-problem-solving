function unscrambleEggs(word) {
  let newArr = word.split("egg");
  return newArr.join("")
}
console.log(unscrambleEggs("Beggegeggineggneggeregg"));
console.log(unscrambleEggs("ceggodegge heggeregge"));
