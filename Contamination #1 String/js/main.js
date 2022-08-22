const contamination = ((text, char) => {
  let contaminated = ''
  if(text < 0 || char < 0) {
    return  '';
  } else {
      for(let i = 0; i < text.length; i++)
      contaminated += `${char}`;
  }
  return contaminated
  });