function lowercaseCount(str) {
  const matches = str.match(/[a-z]/g);
  return matches ? matches.length : 0;
}
console.log(countLowercase("Hello World!"));     
console.log(countLowercase("123ABCdef"));        
console.log(countLowercase("UPPERCASE")); 
