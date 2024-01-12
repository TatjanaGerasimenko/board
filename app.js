const board = document.querySelector('#board')
const colors = ['#DDA0DD','#DA70D6','#EE82EE', '#FF00FF', '#FF00FF', '#BA55D3', '#9932CC', '#9400D3']
const SQUARES_NUMBER = 500

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const squere = document.createElement('div')
  squere.classList.add('squere')

  squere.addEventListener('mouseover', () => 
  SetColor(squere))

  squere.addEventListener('mouseleave', () =>
  removeColor(squere))
  

  board.append(squere)
}

function SetColor(element) {
  const color = getRandomColor()
  element.style.backgroundColor = color
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
  element.style.backgroundColor = '#1d1d1d'
  element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length)
  return colors[index]
}