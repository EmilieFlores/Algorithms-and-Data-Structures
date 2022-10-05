function toCsvText(array) {
   let z = ''
   array.forEach( n => {
     z += n + '\n'
   })
                 return z.substring(0, z.length -1)
}
