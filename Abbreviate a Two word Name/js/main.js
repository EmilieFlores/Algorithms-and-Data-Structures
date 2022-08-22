function abbrevName(name){
  let abbreviation = name
  .split(' ')
  .map(word => word[0])
  .join('.')
  return abbreviation.toUpperCase()

}