function vowelOne(s){
  let arr = [];
  for(let i = 0; i < s.length; i++){
    if( s[i].toLowerCase() === 'a' ||s[i].toLowerCase() === 'e' || s[i].toLowerCase() === 'o' || s[i].toLowerCase() === 'u' || s[i].toLowerCase() === 'i'){
      arr.push('1')
    } else {
      arr.push('0')
    }
  }
  return arr.toString().split(',').join('')
}
