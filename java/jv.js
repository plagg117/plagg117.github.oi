alert("HOLA  :>")
alert("HACER ESTO ME COSTO NOCHES DE DESVELO, VALORALO 👍")
alert("P.D= SI SALE ALGUN ERROR, PERDON ESTOY VOLVIENDO A PROGRAMACION 😊")

const buttonNo = document.querySelector('#no')
const buttonYes = document.querySelector('#yes')

let fontSize = 2

let messages = [
  'Estas segurx?',
  'Piensalo bien',
  'Piensalo muy bien',
  'Piensalo',
  'Mira el otro botón',
  'DALE AL SII!!!',
  ';-;'
]

buttonNo.addEventListener('click', () => {
  fontSize = fontSize + .5
  buttonYes.style.fontSize = `${fontSize}rem`

  const indexRandom = Math.floor(Math.random() * messages.length)

  buttonNo.textContent = messages[indexRandom]
})

buttonYes.addEventListener('click', () => {
  document.querySelector('#message').style.display = 'flex'
})
