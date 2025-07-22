function validateCode (code) {
  return /^[123]/.test(code.toString());
}
console.log(validateCode(123));
console.log(validateCode(248));
console.log(validateCode(8));
