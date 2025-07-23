function multipleOfIndex(array) {
  return array.filter((el, idx) => idx !== 0 && el % idx === 0);
}
console.log(multipleOfIndex([22, -6, 32, 82, 9, 25]));
