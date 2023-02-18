function numberJoy (n){
  let sum = [...String(n)].reduce((acc,curr) => acc + Number(curr) ,0)
  let sumR = Number([...String(sum)].reverse().join(''))
  return sum * sumR == n
}
