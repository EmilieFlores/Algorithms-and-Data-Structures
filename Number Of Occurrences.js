Object.defineProperty(Array.prototype, 'numberOfOccurrences',{ 
  value : function numberOfOccurrences(element) {
    let result = 0
    for(let i = 0; i < this.length; i++){
      if(this[i] == element ){
        result++
      }
    }
    return result
  }
});
