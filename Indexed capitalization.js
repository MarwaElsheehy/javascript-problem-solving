function capitalize(string, indices) {
  let chars = string.split('');
  for (let i of indices) {
    if (i >= 0 && i < chars.length) {
      chars[i] = chars[i].toUpperCase();
    }
  }
  return chars.join('');
}
console.log(capitalize("abcdef",[1,2,5]));
