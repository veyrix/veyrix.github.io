const targets =  document.querySelectorAll('.target')
const scoreDisplay = document.querySelector('#score')
const container = document.querySelector('.container')
let score = 0

container.addEventListener('mousedown', changeCursor)
container.addEventListener('mouseup', restoreCursor)



function changeCursor() {
  this.style.cursor = "url('../img/Hammer.90deg.cur'), auto"
  console.log("mousedown")
} 

function restoreCursor() {
  this.style.cursor = "url('../img/Hammer.cur'), auto"
  console.log("mouseup")
} 

