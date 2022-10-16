const giveMeFive = (obj) => /*for( in ) */[].concat(...Object.entries(obj)).filter(element => element.length == 5)
