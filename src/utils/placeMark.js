/**
 * Places the player's mark (X or O) in a cell on the Tic Tac Toe board.
 *
 * @param {Element} cell - The HTML element representing the cell where the mark is placed.
 * @param {string} currentTurn - The current player's mark (either 'X' or 'O').
 * @returns {void}
 *
 */


const placeMark = (cell,currentTurn) => {
    cell.innerText = currentTurn ;
};

export default placeMark;
