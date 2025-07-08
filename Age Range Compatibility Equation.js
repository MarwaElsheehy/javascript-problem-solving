function datingRange(age) {
  if (age <= 14) {
    const min = Math.floor(age - 0.10 * age);
    const max = Math.floor(age + 0.10 * age);
    return `${min}-${max}`;
  } else {
    const min = Math.floor(age / 2 + 7);
    const max = Math.floor((age - 7) * 2);
    return `${min}-${max}`;
  }
}
console.log(datingRange(15));
console.log(datingRange(25));
