function billboard(name, price = 30){
  let total = 0
  for (let i = 1; i <= name.length; i++) {
    total += price
  }
  return total
} 