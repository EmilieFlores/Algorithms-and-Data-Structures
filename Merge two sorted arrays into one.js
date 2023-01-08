const mergeArrays = (arr1, arr2) => Array.from(new Set(arr1.concat(arr2).sort(function(a, b){return a-b})))
