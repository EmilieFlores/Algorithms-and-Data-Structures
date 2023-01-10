function arrayMadness(a, b) {
  return a.map(item => item ** 2).reduce((acc, current) => acc  + current) > b.map(item => item ** 3).reduce((acc,current) => acc + current);
}
