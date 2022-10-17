const search = (budget, prices) => prices.filter(element => element <= budget).sort((a,b) => a-b).join(',')
