function isPalindrome(x) {
  return x.split('').reverse().join('').toLowerCase() === x.toLowerCase();
}
console.log(isPalindrome("Abba"));
console.log(isPalindrome("hello"));
