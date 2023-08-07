// Teste de Velocidade

// Escreva um programa em javascript que permita inserir o nome e a velocidade de dois veículos e exiba na tela uma mensagem dizendo qual dos dois é mais rápido (ou que as velocidades são iguais se este for o caso)

const car1 = prompt("Informe o nome do primeiro carro:")
const speed1 = parseFloat(prompt("Informe a velocidade do primeiro carro:"))

const car2 = prompt("Informe o nome do segundo carro:")
const speed2 = parseFloat(prompt("Informe a velocidade do segundo carro:"))


if (speed1 > speed2) {
  alert(car1 + " é mais rápido do que " + car2)  
} else if (speed2 > speed1) {
  alert(car2 + " é mais rápido do que " + car1)
} else {
  alert(car1 + " e " + car2 + " possuem velocidades iguais.")
}
