function solve (s) {
 let upper = (s.match(/[A-Z]/g) || []).length,
  lower = (s.match(/[a-z]/g) || []).length,
  numbers = (s.match(/[0-9]/g) || []).length,
  special = s.length - upper - lower - numbers
 return [upper,lower,numbers,special]
 }
