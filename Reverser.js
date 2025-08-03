function reverse(n, reversed = 0) {
    if (n === 0) {
        return reversed;
    }
    return reverse(Math.floor(n / 10), reversed * 10 + n % 10);
}
console.log(reverse(1234));
