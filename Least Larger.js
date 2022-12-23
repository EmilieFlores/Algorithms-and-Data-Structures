function leastLarger(a,i) {
  let smaller = Infinity,
      result = -1 
  for(let index = 0; index < a.length; index++){
    if(a[index] > a[i] && a[index] < smaller){
      smaller = a[index]
      result = index
    }
  }
  return result 
}
