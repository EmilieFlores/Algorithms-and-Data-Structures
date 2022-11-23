const mostFrequentItemCount = (collection) => 
collection.length ? 
      Math.max(
  ...collection.map(
    element => collection.filter(
      element2 => element2 === element
    ).length
  )
) : 0
