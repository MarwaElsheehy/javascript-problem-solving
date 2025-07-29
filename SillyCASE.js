function sillycase(silly) {
  const len = silly.length;
  const mid = Math.floor(len / 2);

  const splitPoint = len % 2 === 0 ? mid : mid + 1;

  const firstHalf = silly.slice(0, splitPoint).toLowerCase();
  const secondHalf = silly.slice(splitPoint).toUpperCase();

  return firstHalf + secondHalf;
}
console.log(sillycase("foobar"));
