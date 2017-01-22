/*
Imagine you are playing a game of tic-tac-toe and you are trying to see if the current
board is solved.
If you never played the game, here is a good simulator: http://playtictactoe.org/
Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty,
1 if it is an X, or 2 if it is an O, like so:
[[0,0,1],
 [0,1,2],
 [2,1,0]]
We want our function to return -1 if the board is not solved yet, 1 if X won, 2 if O won,
or 0 if it's a draw.
You may assume that the board passed in is valid.
Example:
var board = [[0,0,1],
             [0,1,2],
             [2,1,0]];
ticTacToe(board);//should return -1
var solvedBoard = [[0,1,1],
                   [0,1,2],
                   [2,1,2]];
ticTacToe(solvedBoard);//should return 1
*/
    
function ticTacToe(board){                                    // Time complextie at all :  O(n^2)  

        for (var i = 0; i < board.length; i++) {            //O(n)
                var Xrow = 0;
                var Xcol = 0;
                var Orwo = 0;
                var Ocol = 0;
                var Xmid = 0;
                var Omid = 0;

            for (var j = 0; j < board.length; j++) {         // O(n)

                if(board[i][j]===1){Xrow+=1}
                if(board[i][j]===2){Orwo+=1}
                if(board[j][i]===1){Xcol+=1}
                if(board[j][i]===2){Ocol+=1}
            }

                if(board[i][i]===1){Xmid+=1}
                if(board[i][i]===2){Omid+=1}    

                    
                 if(Xrow===3){return 1}
                  else if(Orwo===3){return 2}
                    else  if(Xcol===3){return 1}
                        else  if(Ocol===3){return 2}
                            else if(Xmid===3){return 1}
                                else if(Omid===3){return 2}
                                                                                      
    }
        return -1
}

