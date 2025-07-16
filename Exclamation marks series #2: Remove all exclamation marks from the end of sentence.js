function remove(string) {
  while (string[string.length - 1] === "!") {
    string = string.slice(0, -1);
  }
  return string;
}
console.log(remove("Hi!"));
console.log(remove("Hi!!!"));
console.log(remove("!Hi"));


function remove(string) {
  return string.replace(/!+$/, '');
}
