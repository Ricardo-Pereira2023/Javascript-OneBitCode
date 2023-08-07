// RETORNO DE UMA FUNÇÃO

function calcularMedia(a, b) {
  const media = (a + b) / 2
  return media
}
const resultado = calcularMedia(7, 2)
console.log(resultado)

function criarProduto(nome, preço) {
  const produto = {
    nome, // nome: nome
    preço, // preço: preço
    quantidadeEstoque: 1,
  }
  return produto
}
const notebook = criarProduto("Notebook Intel Core i9 32GB", "R$: 18.000,00")
console.log(notebook)

function maioridade(idade) {
  if (idade >= 18) {
    return "Maior de idade"
  } else {
    return "Menor de idade"
  }
}
console.log(maioridade(29))
console.log(maioridade(13))
