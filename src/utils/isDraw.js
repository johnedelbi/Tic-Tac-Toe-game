/**
 * Checks if the Tic Tac Toe game has ended in a draw.
 *
 * @returns {boolean} Returns true if the game has ended in a draw, otherwise false.
 *
 */

import dom from '../dom.js';

const isDraw = () => {
      return [...dom.cells].every(cell => {
    return cell.innerText.includes("O") || cell.innerText.includes("X")
  })

};

export default isDraw;
