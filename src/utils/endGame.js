/**
 * Ends the Tic Tac Toe game and updates the UI based on the game result.
 *
 * @param {boolean} draw - Indicates whether the game ended in a draw.
 * @returns {void}
 *
 * @example
 * 
 * const endGame = endGame(true);
 * console.log(endGame); // Output: Draw.
 * const endGame = endGame(false);
 * console.log(endGame); // Output: x or o wins! and increase the score by 1.
 */

import data from "../data.js";
import dom from '../dom.js';

import starGameHandler from "../handlers/starGameHandler.js";

const endGame = (draw) => {
    if(draw){
        dom.text.innerText= "Draw."
    }else{
        dom.text.innerText= `${data.oTurn ? "O's" : "X's"} Wins!`;
        data.oTurn ? data.o++ : data.x++ ;
        dom.score.innerHTML = `X = ${data.x}  <br />  O = ${data.o}`;
        
    }
    // Display the restart button and remove click event listeners from cells
        dom.restartBtn.style.display = 'flex';
        dom.cells.forEach(cell =>{
        cell.removeEventListener('click' , starGameHandler)
        })

};

export default endGame;
