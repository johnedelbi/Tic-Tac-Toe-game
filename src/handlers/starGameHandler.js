/**
 * Handles the execution of a player's turn in a Tic Tac Toe game.
 * The function is called when a cell on the game board is clicked. It places
 * the current player's mark ('X' or 'O') in the clicked cell, checks for a win
 * condition using `checkWin`, checks for a draw using `isDraw`, and switches the turn
 * using `switchTurn`.
 *
 * @param {Event} e - The click event triggered when a cell is clicked.
 * @function
 * @returns {void}
 *
 */
import data from '../data.js';

import placeMark from '../utils/placeMark.js';
import switchTurn from '../utils/switchTurn.js';
import endGame from '../utils/endGame.js';
import checkWin from '../utils/checkWin.js';
import isDraw from '../utils/isDraw.js';

const starGameHandler = (e) => {
        
    const cell = e.target;
    const currentTurn = data.oTurn ? "O" : "X" ;
    // place the X or O
    placeMark(cell,currentTurn);
    // Check for win
    if(checkWin(currentTurn)){
        endGame(false);
    }else if(isDraw()){ // Check for draw
        endGame(true);
    }else{
    // Switch turn 
    switchTurn();
    }
};

export default starGameHandler;
