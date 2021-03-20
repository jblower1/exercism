
export const annotate = (input) =>  {
    const input2D = splitInput(input);
    const calculatedBoard = traverseBoard(input2D);
    return rebuildInput(calculatedBoard);
}

const traverseBoard = (input2D) => {
    return input2D.map( (row, rowIndex) => {
        return row.map( (cell, colIndex) => {
            if(cell === '*') return '*';
            //check surrounding cells
            let mineCount = direction.reduce((mineTotal, currentDirection) => {
                try{
                    const newX = rowIndex + currentDirection[0];
                    const newY = colIndex + currentDirection[1];
                    return input2D[newX][newY] === '*' ? mineTotal + 1 : mineTotal;
                }catch{
                    return mineTotal;
                }
            }, 0);
            return mineCount ? mineCount : ' ';
        });
    });
}

const splitInput = (input) => { 
    return input.map( (boardline) => {
        return boardline.split("");
    });
}

const rebuildInput = (input2D) => {
    return input2D.map( (boardLineArray) => {
        return boardLineArray.join('');
    });
}

const direction = [[1,0],[-1,0],[0,1],[0,-1],[1,1],[-1,1],[1,-1],[-1,-1]];

// input = array of strings, each row is one board row
// 1. split each row into its individual characters into 2D array
// ... more stuff here
// handle mine surrounded by spaces
// 2. rebuild from characters to 1D array for output