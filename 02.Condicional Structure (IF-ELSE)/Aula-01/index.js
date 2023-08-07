// ESTRUTURA CONDICIONAL (IF e ELSE)

// Permite criar blocos de código que vão ser executados somente quando uma 
// determinada operação lógica for verdadeira.


const idade = prompt("Informe a sua idade")

if (idade >= 18) {
  alert("Você é um (a) adulto(a)!")
} else if (idade >= 12) {
  alert("Você é um (a) adolescente!")
} else if (idade < 12 && idade > 2) {
  alert("Você é criança!")
} else {
  alert("Você é um bebê!")
}


// OPERADOR TERNÁRIO

// É uma forma abreviada e autoavaliada do IF ELSE
// Forma abreviada porque você escreve ele todo em uma linha só.
// Forma autoavaliada porque você consegue atribuir ele direto pra uma variável. 

// const idade = prompt("Informe a sua idade:")

// const resultado = (idade >= 18) ? "Você é um (a) adulto (a)!" : "Você é um (a) adolescente!"
// alert(resultado)
