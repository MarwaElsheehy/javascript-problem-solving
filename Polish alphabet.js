function correctPolishLetters(string) {
  const letters = {
    "ą": "a",
    "ć": "c",
    "ę": "e",
    "ł": "l",
    "ń": "n",
    "ó": "o",
    "ś": "s",
    "ź": "z",
    "ż": "z"
  };

  let res = '';
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    res += letters[char] || char; // Replace if found, otherwise keep original
  }
  return res;
}
