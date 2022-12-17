function movie_times(open, close, length) {
let result = []
if(open > close){
  close += 24
}
for(let i = open * 60; i + length <= close * 60; i += (length + 15)){
  result.push([Math.floor(i /60) % 24, i % 60 ])
}
  return result 
}
