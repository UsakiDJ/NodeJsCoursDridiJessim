const readline = require ("readline")



let pionWhite = {

    pos : 0 ,
    pawnColor : "white" ,
    isAlive : true,

};


let pionBlack = {

    pos : 0 ,
    pawnColor : "black" ,
    isAlive : true,

};


const board = [ ['0',pionBlack.pawnColor,'3',pionBlack.pawnColor,'0',pionBlack.pawnColor,'0',pionBlack.pawnColor,], 
                [pionBlack.pawnColor,'2',pionBlack.pawnColor,'0',pionBlack.pawnColor,'0',pionBlack.pawnColor,'0',],
                [pionBlack.pawnColor,'2',pionBlack.pawnColor,'0',pionBlack.pawnColor,'0',pionBlack.pawnColor,'0',], 
                ['0  ','2  ','0  ','0  ','0  ','0  ','0  ','0  ',], 
                ['0  ','2  ','0 ','0 ','0 ','0  ','0  ','0  ',], 
                [pionWhite.pawnColor,'2',pionWhite.pawnColor,'0',pionWhite.pawnColor,'0',pionWhite.pawnColor,'0',],
                ['0',pionWhite.pawnColor,'0',pionWhite.pawnColor,'0',pionWhite.pawnColor,'0',pionWhite.pawnColor,],
                [pionWhite.pawnColor,'2',pionWhite.pawnColor,'0',pionWhite.pawnColor,'0',pionWhite.pawnColor,'0',]]; 


 
for (let j = 0; j < board.length; j++) {


    for (let index = 0; index < board[j].length; index++) {
        const element = board[j][index];
  
    }
    
}

let numToChar = ["a", "b", "c", "d", "e", "f", "g", "h"];

function displayBoard () { 
  let column = [0, 1, 2, 3, 4, 5, 6, 7];
  console.log("    " + column.join("   "));
  console.log("------------------------------------------");
  for (let i = 0; i < board.length; i++) {
    console.log(numToChar[i] + "   " + board[i].join(" "));
  }
};


displayBoard();



function movePawn (board) { 

board[7][7] = board[0][7]
displayBoard()
    
}

movePawn(board); 