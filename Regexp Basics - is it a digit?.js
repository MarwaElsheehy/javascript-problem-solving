function isDigit(s) {
  return /^\d$/.test(s);
}
console.log(isDigit("5"));    
console.log(isDigit("a"));    
console.log(isDigit("12"));   
console.log(isDigit(""));
