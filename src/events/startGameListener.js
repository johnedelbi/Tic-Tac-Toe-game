/**
 * Add a click event listener to each cell of the game
 * when user click on the any cell the `starGameHandler` function is invoked to perform
 * the start game functionality and update the UI with X or O
 * Also as it's the start of the game we hide the restart button specified in the `dom` module
 *  and rest the welcome text specified in the `dom` module
 *
 * @function
 * @example
 * startGameListener(); // Binds the starGameHandler function to the cell's click event
 */

import dom from '../dom.js';
import starGameHandler from '../handlers/starGameHandler.js'


const startGameListener = () => {
    dom.text.innerText="X can start";
    dom.restartBtn.style.display = 'none';
    dom.cells.forEach(cell =>{
        cell.innerText="";
    cell.addEventListener('click' , starGameHandler, {once:true})
        })};

export default startGameListener;
