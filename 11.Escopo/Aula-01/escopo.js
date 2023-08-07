/* 
O que é escopo e como funciona?

Escopo é o contexto onde a variável foi declarada podendo ser
mais externo, ou mais interno (se estiver dentro de um bloco).
Variáveis no escopo mais externo podem ser usadas dentro de 
escopos mais internos.
*/

let pokemon = "Charmander"

function evoluir() {
  pokemon = "Charmeleon"
}
console.log(pokemon)
evoluir()
console.log(pokemon)
console.log("\n")

/*
Variáveis no escopo mais interno não podem ser
usadas fora dele em escopos mais internos
*/

function criarAnimal() {
  let animal = "Gato"
}
criarAnimal()
// console.log(animal) // Gera Erro
// console.log("\n")

/*
Escopo com var e let (ou const) 

Apenas variáveis declaradas com o var ficam disponíveis
em um escopo mais externo.
*/

function avaliarNota(nota) {
  if (nota > 60) {
    var aprovado = true
    let situação = "Aprovado"
  } else {
    var aprovado = false
    let situação = "Reprovado"
  }
  console.log(nota)
  console.log(aprovado)
  // console.log(situação) // Gera Erro
}
avaliarNota(83)
avaliarNota(49)
console.log("\n")

// Mas mesmo o var não consegue "sair" para fora do escopo da função

function ola() {
  var texto = "Olá, mundo!"
}
// console.log(texto) //Gera Erro


/*
Inicialização de variáveis com var e let (ou const)

Apenas variáveis com o Var serão carregadas.
Sempre no começo do código, acima de todo o resto.
*/

console.log(nome)
// console.log(sobrenome)
var nome = "Ricardo"
let sobrenome = "Araujo"
console.log(nome)
// console.log(sobrenome)
