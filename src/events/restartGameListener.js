/**
 * Adds a click event listener to the restart button specified in the `dom` module.
 * When the button is clicked, the `startGameListener` function is invoked 
 * to start new game and reset the UI
 * 
 * @function
 * @example
 * restartGameListener(); // Binds the startGameListener function to the button's click event
 */

import dom from '../dom.js';
import startGameListener from '../events/startGameListener.js';

const restartGameListener = () => {
dom.restartBtn.addEventListener('click', startGameListener);
};

export default restartGameListener;