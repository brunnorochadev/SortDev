

const drawButton = document.querySelector(".drawbutton")


function generatenumber (){
  const inputMin = Math.ceil (document.querySelector(".input-min").value)
  const inputMax = Math.floor(document.querySelector(".input-max").value)

  const result = Math.floor(Math.random() * (inputMax - inputMin + 1)) + inputMin;

alert ("O Resultado do Sorteio é:  " + result)
}

drawButton.addEventListener("click", generatenumber)