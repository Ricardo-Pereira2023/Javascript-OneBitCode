/* Visitando Novas Cidades

Escreva um programa em javascript que peça o nome de um turista e então pergunte se ele já visitou alguma cidade. Caso a resposta seja sim, pergunte o nome da cidade e o armazene em uma variável, e então continue perguntando se o turista visitou alguma outra cidade até que a resposta seja não. No fim, o programa deve exibir o nome do turista, quantas e quais cidades ele visitou. */


const tourist = prompt("Hey tourist, what's your name?")
let cities = ""
let score = 0

let proceed = prompt("Have you ever visited any cities? (Yes/No)?")

while (proceed === "Yes") {
  let city = prompt("What is the name of the city visited?")
  cities += " - " + city + "\n"
  score++
  proceed = prompt("Did you visit any other cities? (Yes/No)")
}
alert(
  "Tourist: " + tourist +
  "\nNumber of cities visited: " + score +
  "\nVisited cities:\n" + cities
)