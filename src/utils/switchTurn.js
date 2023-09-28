/**
 * Switches the turn in a Tic Tac Toe game
 *  and updates the UI with the current player's turn.
 *
 * @function
 * @returns {void}
 */

import data from '../data.js';
import dom from '../dom.js';

const switchTurn = () => {
    data.oTurn = !data.oTurn;
    const XO = data.oTurn ? 'O' : 'X';
    dom.text.innerText = `it's the ${XO} Turn`;
};

export default switchTurn;
