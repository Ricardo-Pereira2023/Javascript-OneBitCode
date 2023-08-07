/*
## Robô da Tabuada

Escreva um programa em javascript que seja capaz de calcular a tabuada de um determinado número (de 1 a 20). O programa deve começar pedindo o número a ser usado nos cálculos e então salvar todos os resultados de multiplicações de 1 a 20 usando o número informado dentro de uma variável do tipo string. Depois o programa deve exibir esses resultados e finalizar.
*/

let n = prompt(
  "Olá, eu sou o Robô da Tabuada!\n" +
  "Informe o número de (1 a 20) que você deseja calcular a tabuada:"
 )
let resultado = ""

if (n <= 20) {
  for (let i = 1; i <= 20; i++) {
   resultado += " -> " + n + " x " + i + " = " + (n * i) + "\n"
  }
  alert("Resultado da tabuada de " + n + ":\n\n" + resultado)
} else {
  alert(`Número ${n} fora da faixa máxima permitida... tente novamente!`)
}