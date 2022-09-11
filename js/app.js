/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

/*---------------------------- Variables (state) ----------------------------*/
let board, turn, winner


/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll('.game-square')
const messageEl = document.querySelector('#message')
const resetBtnEl = document.querySelector('#reset-button')

/*----------------------------- Event Listeners -----------------------------*/
squareEls.forEach(function(square) {
  square.addEventListener('click', handleClick)
})
resetBtnEl.addEventListener('click', init)

/*-------------------------------- Functions --------------------------------*/
init()

function init() {
  board = [null, null, null, null, null, null, null, null, null]
  turn = 1
  winner = null
  render() 
  resetBtnEl.setAttribute('hidden', true)
}

function render() {
  resetBtnEl.removeAttribute('hidden')
  resetBtnEl.className = 'retry'
  board.forEach((square, index) => {
    if(square === 1) {
      squareEls[index].textContent = 'X' 
    } if (square === -1) {
      squareEls[index].textContent = 'O' 
    } else if (square === null){
      squareEls[index].textContent = ''
    } 
})
  if (winner === null){
    messageEl.textContent = ` It's player ${turn === 1 ? 'X' : 'O'} turn`
  } else if (winner === "T"){
    messageEl.textContent = `This game is a tie!`
  } else {
    messageEl.textContent = `It's player ${turn === 1 ? 'O' : 'X'} that wins the game!`
    confetti.start(2000)
  }
  
}

function handleClick(evt) {
  const sqIdx = parseInt(evt.target.id.replace('sq', ''))
  if(board[sqIdx] || winner !== null){
    return
  }
  board[sqIdx] = turn
  turn *= -1
  winner = getWinner()
  console.log(winner, "winner")
  render()
  console.log(board[sqIdx])
}

function getWinner() {
  if (!board.includes(null)){
    return "T"
  }
  for (let i = 0; i < winningCombos.length; i++) {
    if (board[winningCombos[i][0]] + board[winningCombos[i][1]] + board[winningCombos[i][2]] === 3) {
      return 1
    } else if (board[winningCombos[i][0]] + board[winningCombos[i][1]] + board[winningCombos[i][2]] === -3) {
      return -1
    } 
  }
  if (!board.includes(null)){
    return "T"
  }
  return null
}