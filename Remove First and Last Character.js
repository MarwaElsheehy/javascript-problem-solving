function removeChar(str){
  const removeFirstAndLast = str.slice(1, -1);
  return removeFirstAndLast;
}
console.log(removeChar("eloquent"));
console.log(removeChar("country"));
console.log(removeChar("person"));
