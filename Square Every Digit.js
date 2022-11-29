function squareDigits(num){
  let string = String(num),
      result = ""
  for(let index = 0; index < string.length; index++){
    result += string[index] ** 2
  }
  return Number(result);
}
