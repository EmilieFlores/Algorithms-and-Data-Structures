const hexHash = (code) => 
  [...code.replace(/./g, element  => element.charCodeAt().toString(16))
  .replace(/\D/g, '')].reduce((prev,curr) => prev + Number(curr), 0 )
