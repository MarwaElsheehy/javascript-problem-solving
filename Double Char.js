function doubleChar(str) {
    return str.split("").map(x => x + x).join('')
}
console.log(doubleChar("String"));
console.log(doubleChar("Hello World"));
