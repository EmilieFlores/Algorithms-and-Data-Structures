const colorOf = (r,g,b) => `#${[r,g,b].map(element => element.toString(16).padStart(2,0)).join('')}`
