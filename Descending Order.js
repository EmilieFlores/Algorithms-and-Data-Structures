function descendingOrder(n){
  let stringN = String(n)
   return Number(stringN.split('').sort((a,b) => b-a).join(''))
}
