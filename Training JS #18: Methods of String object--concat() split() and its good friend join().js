const splitAndMerge = (string, separator) => string.split(' ').map(element => element.split('').join(separator)).join(' ')
