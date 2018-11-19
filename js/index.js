const targets =  document.querySelectorAll('.target')
const scoreDisplay = document.querySelector('#score')
const container = document.querySelector('.container')
const play = document.querySelector('#play')
const sound = document.querySelector('#sound')
let timeSelector = document.querySelector('#duration')
let duration = timeSelector.value;
let timeUp = false
let lastTarget
let score = 0

scoreDisplay.textContent = 0

timeSelector.addEventListener('click', function() {
  return duration = this.value
})

play.addEventListener('click', startGame)


/*Mouse events to animate the cursor */
container.addEventListener('mousedown', changeCursor)
container.addEventListener('mouseup', restoreCursor)

function changeCursor() {
  this.style.cursor = "url('../img/Hammer.90deg.cur'), default"
} 

function restoreCursor() {
  this.style.cursor = "url('../img/Hammer.cur'), default"
} 

//returns a random time btw min and max miliseconds
function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min)
}

//Returns a ramdom target
function randomTarget(targets) {
  const index = Math.floor(Math.random() * targets.length)
  const target = targets[index]
  if(target === lastTarget) {
    return randomTarget(targets) //prevents repeated targets
  }
  lastTarget = target;
  return target
}

function activateTarget() {
  const time = randomTime(600, 1000)
  const target = randomTarget(targets)
  target.classList.add('active')
  setTimeout(() => {
    target.classList.remove('active')
    if(!timeUp) activateTarget()
  }, time)
}

function startGame() {
  scoreDisplay.textContent = 0
  timeUp = false
  score = 0
  activateTarget()
  setTimeout(() => timeUp = true, duration)
}

function playSound() {
  if(!sound) return; //Stop the function
  sound.currentTime = 0 //Reset audio to the start when is clicked again;
  sound.play();
}

function hitTarget(e) {
  if(!e.isTrusted) return //Stops the func if is not a real click
  score++
  this.classList.remove('active')

  //Updates the score
  scoreDisplay.textContent = score
  playSound()
}

targets.forEach(target => target.addEventListener('click', hitTarget))



