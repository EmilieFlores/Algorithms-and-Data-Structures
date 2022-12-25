const countSquares = (cuts) => 
 cuts == 0 ? 1 : cuts == 1 ? 8 : (cuts + 1 ) ** 3 -(cuts - 1) ** 3
