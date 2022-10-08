function points(games) {
 return games.reduce((w, [x,_,y]) => w + (x > y ? 3 : x == y), 0 )
}
