function grow(x){
  let result = x.reduce((acc, cur) => acc * cur);
  return result;
}
console.log(grow([4, 1, 1, 1, 4]));
