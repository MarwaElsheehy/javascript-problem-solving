function replace(s) {
    return s.replace(/[aeiouAEIOU]/g, '!');
}
console.log(replace("aeiou"));
console.log(replace("ABCDE"));
