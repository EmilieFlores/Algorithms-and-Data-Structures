const getAverage = (marks) =>{
  let z = marks.reduce((acc, current) => acc + current)
  return Math.floor(z / marks.length)
  }
