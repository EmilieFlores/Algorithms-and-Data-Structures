et status = ""

function mazeRunner(maze, directions) {
  let start = [];
  
  maze.map((row, i) => {
    row.map((val, j) => {
      val === 2 ? start = [i, j] : [];
    })
  })
  
  analyzePath(maze, start[0], start[1],directions, 0);
  
  return status; 
}

function analyzePath(maze, i, j, directions,directionsIndex){
  if(i < 0 || i >= maze.length || j < 0 || j >= maze[i].length || maze[i][j] === 1) return status = "Dead";
  
  if(maze[i][j] === 3) return status ="Finish";
  
  if(directionsIndex >= directions.length && maze[i][j] !== 3) return status ="Lost";
  
  if(directions[directionsIndex] === "N") analyzePath(maze, i - 1, j, directions,directionsIndex + 1);
  
  if(directions[directionsIndex] === "S") analyzePath(maze, i + 1, j, directions,directionsIndex + 1);
  
  if(directions[directionsIndex] === "E") analyzePath(maze, i, j + 1, directions,directionsIndex + 1);
  
  if(directions[directionsIndex] === "W") analyzePath(maze, i, j - 1, directions,directionsIndex + 1);
  
  
}
