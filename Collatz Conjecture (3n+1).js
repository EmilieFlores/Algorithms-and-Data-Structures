var hotpo = function(n){
  let count = 0
  if (n < 2) {
    return 0
  }
  while (n > 1) {
    if (n % 2){
    n = n * 3 + 1
  } else {
    n /= 2
   }
   count++
}
  return count 
}
