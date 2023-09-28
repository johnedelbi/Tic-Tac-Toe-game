import placeMark from './placeMark'; // Import the function to test

describe('placeMark function', () => {
    // Test case 1: Place 'X' in the cell
    test('should place "X" in the cell', () => {
        const cell = document.createElement('div');
        const currentTurn = 'X';
        placeMark(cell, currentTurn);
        expect(cell.innerText).toBe('X');
    });

    // Test case 2: Place 'O' in the cell
    test('should place "O" in the cell', () => {
        const cell = document.createElement('div');
        const currentTurn = 'O';
        placeMark(cell, currentTurn);
        expect(cell.innerText).toBe('O');
    });
});
