function validateUsr(username) {
  return /^[a-z0-9_]{4,16}$/.test(username);
}
console.log(isValidUsername("user_123"));    
console.log(isValidUsername("abc"));          
console.log(isValidUsername("UPPER_case"));   
