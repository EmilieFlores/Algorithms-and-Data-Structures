function zeroAndOne(s) {
  let out = 0;
  for (let i = 0; i < s.length; i++)
    if (s[i] === s[i+1] || i === s.length-1)
      out++;
    else
      i++;
  return out;
