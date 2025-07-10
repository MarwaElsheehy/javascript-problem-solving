function invert(array) {
   return array.length == 0 ? array : array.map((e) => e * -1) ;
}
console.log((invert([1,2,3,4,5])));
console.log((invert([])));
