// import your listeners(events)

//import sumListener from './events/sumListener.js';

//sumListener();


let oTurn;
let x = 0;
let o = 0;
const score = document.getElementById('score')
const cells = document.querySelectorAll('[data-cell]');
const restartBtn = document.getElementById('restartBtn')
const text = document.getElementById('text');
const winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8]
]

function startGame(){
    text.innerText="X can start";
    restartBtn.style.display = 'none';
    cells.forEach(cell =>{
        cell.innerText="";
    cell.addEventListener('click' , handelClick, {once:true})
        })
    
    }
startGame();

function handelClick(e){

    const cell = e.target;
    const currentTurn = oTurn ? "O" : "X" ;
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
}

restartBtn.addEventListener('click', startGame);

function isDraw() {
  return [...cells].every(cell => {
    return cell.innerText.includes("O") || cell.innerText.includes("X")
  })
}

function placeMark(cell,currentTurn){
    cell.innerText = currentTurn ;
    
}


function switchTurn(){
    oTurn= !oTurn;
    const XO= oTurn? "O" : "X";
    text.innerText= `it's the ${XO} Turn`;

}


function checkWin(currentTurn) {
    return winningCombinations.some(combination => {
        return combination.every(indx => {
            return cells[indx].innerText.includes(currentTurn);
        });
    });
}

function endGame(draw){
    if(draw){
        text.innerText= "Draw."
    }else{
        text.innerText= `${oTurn ? "O's" : "X's"} Wins!`;
        oTurn ? o++ : x++ 
        score.innerHTML = `X = ${x}  <br />  O = ${o}`
    }
    restartBtn.style.display = 'flex';
    cells.forEach(cell =>{
    cell.removeEventListener('click' , handelClick)
        })



}