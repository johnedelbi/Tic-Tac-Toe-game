/**
 * Checks if the current player has won the Tic Tac Toe game.
 *
 * @param {string} currentTurn - The current player's mark (either 'X' or 'O').
 * @returns {boolean} Returns true if the current player has won, otherwise false.
 *
 */

import data from "../data.js";
import dom from '../dom.js';

const checkWin = (currentTurn) => {
    
    return data.winningCombinations.some(combination => {
        return combination.every(indx => {
            return dom.cells[indx].innerText.includes(currentTurn);
        });
    });

};

export default checkWin;
