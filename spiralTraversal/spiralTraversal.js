/*
 * Write a function that accepts a 2-dimensional array (array of arrays),
 * and prints out every value found, but in a spiral from the upper left in to the center
 * Example:
    spiralTraversal([
      [1,2,3],
      [4,5,6],
      [7,8,9]
    ]);
    returns [1, 2, 3, 6, 9, 8, 7, 4, 5]
 */

var spiralTraversal = function(matrix){
	// the algorithm for solving from intrnet and i apply it on javascript :/

	var newArr=[]
	var firstRow = 0 ;
	var endRow = matrix.length ;
	var strtCol=0 ;
	var endCol=matrix.length;
	var i=0
  
 
    while (firstRow < endRow && strtCol < endCol)      // time complexti at all : O(n^2)
    {
        
        for (i = strtCol; i < endCol; ++i)
        {
            newArr.push(matrix[firstRow][i]);
        }
        firstRow++;

        for (i = firstRow; i < endRow; ++i)
        {
            newArr.push(matrix[i][endCol-1]);
        }
        endCol--;

        if ( firstRow < endRow)
        {
            for (i = endCol-1; i >= strtCol; --i)
            {
                newArr.push(matrix[endRow-1][i]);
            }
            endRow--;
        }
 
        if (strtCol < endCol)
        {
            for (i = endRow-1; i >= firstRow; --i)
            {
                newArr.push(matrix[i][strtCol]);
            }
            strtCol++;    
        }        
    }
    return newArr
};