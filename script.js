const entre = document.querySelector("#entre")
const e = document.querySelector("#e")
const button = document.querySelector("button")
let numberOne = 0
let numberTwo = 0
let result = 0

const randomNumber = () => {
    numberOne = Math.ceil(entre.value)
    numberTwo = Math.floor(e.value)
    result = Math.floor(Math.random() * (numberTwo - numberOne + 1) + numberOne)
    alert(`Seu número sorteado é: ${result}`)
}

button.addEventListener("click", randomNumber)