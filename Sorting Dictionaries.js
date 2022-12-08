const sortDict = (dict) => Object.keys(dict).map(element => [isNaN(element)? element : Number(element),dict[element]]).sort((a,b) => b[1] - a[1])
