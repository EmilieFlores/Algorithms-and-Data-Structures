var isSquare = function(n){
if(n < 0){
  return false
}
  for(let integer = 0; integer <= n; integer++){
    if(integer ** 2 == n){
      return true 
    } else {
      continue
    }
  }
  return false 
}
