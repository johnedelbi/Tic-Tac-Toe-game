/**
 * Sums two numbers.
 *
 * @param {number} num1 - The first number to be added.
 * @param {number} num2 - The second number to be added.
 * @returns {number} The sum of num1 and num2.
 * @throws {TypeError} If either num1 or num2 is not a number.
 *
 * @example
 * const total = sum(5, 3);
 * console.log(total); // Output: 8
 */

import data from "../data.js";
import dom from '../dom.js';

const switchTurn = () => {
    data.oTurn= !data.oTurn;
    console.log(data.oTurn)
    const XO= data.oTurn? "O" : "X";
    dom.text.innerText= `it's the ${XO} Turn`;

};

export default switchTurn;
