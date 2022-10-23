function sumOfDifferences(arr) {
  arr.sort((a,b) => a < b ?  1: -1)
  if(arr.length > 1){
    return (arr[0] - arr[1]) + (arr[1] - arr[arr.length -1]) 
  } else {
    return 0
  }
}
