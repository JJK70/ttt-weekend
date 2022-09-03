/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let board, turn, winner



/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll('.game-square')
const messageEl = document.getElementById('#message')


/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/
function init() {
  board [null,null,null,null,null,null,null,null,null]
  turn = 1
  winner = null
  render()
  console.log('')
}

// loop board using index of the iteration to access the squares in squareEls array
// style that square however you wish, dependent on the value contained in the current cell being iterated over (-1, 1, or null)
function render() {
  board.forEach((square, index) => {
   if(square === 1){
    squareEls[index].textContent = 'X'
   }if (square === -1){
    squareEls[index].textContent = 'O'
   } else if (square === null){
    squareEls[index].textContent = ''
   }
  })
}