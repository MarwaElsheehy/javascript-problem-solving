function checkVowel(string, position) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  if (position < 0 || position >= string.length) return false;

  const char = string[position].toLowerCase();
  return vowels.includes(char);
}
console.log(checkVowel(('cat', 1)));
console.log(checkVowel(('cat', 0)));
