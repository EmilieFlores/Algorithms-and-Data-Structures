const getSumOfDigits = integer => 
  String(integer).split('').reduce((pre,cur) =>pre + Number(cur),0)
