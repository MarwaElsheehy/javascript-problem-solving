function alienLanguage(str) {
  let words = str.split(" ");
  let res = [];

  for (let w of words) {
    let lastChar = w[w.length - 1].toLowerCase();
    let rest = w.slice(0, w.length - 1).toUpperCase();
    res.push(rest + lastChar);
  }

  return res.join(" ");
}
console.log(alienLanguage("My name is John"));
