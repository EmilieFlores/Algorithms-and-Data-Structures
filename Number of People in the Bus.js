const number = (busStops) => busStops.reduce((pre,[on,off]) => pre + on - off, 0)
