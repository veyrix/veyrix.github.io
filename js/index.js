const targets =  document.querySelectorAll('.target')
const scoreDisplay = document.querySelector('#score')
const container = document.querySelector('.container')
let score = 0;

/*Changes and updates the page title with the current score */
document.title += ` - Your Score ${score}`

/*Adds the current score to the score display*/
scoreDisplay.innerHTML = score

/*Mouse events to animate the cursor */
container.addEventListener('mousedown', changeCursor)
container.addEventListener('mouseup', restoreCursor)

function changeCursor() {
  this.style.cursor = "url('../img/Hammer.90deg.cur'), auto"
} 

function restoreCursor() {
  this.style.cursor = "url('../img/Hammer.cur'), auto"
} 



