function squareDigits(num){
    return Number(
    num.toString().split("").map(n => (+n) ** 2).join("")
  );
}
console.log(squareDigits(3212));
