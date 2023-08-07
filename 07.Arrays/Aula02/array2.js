// CRIANDO UM LISTA COM ELEMENTOS (ARRAY)

const arr = [
  "Frodo",
  "Sam",
  "Merry",
  "Pippin",
  "Gandalf",
  "Aragorn",
  "Legolas",
  "Gimli",
]
console.log('Criando uma lista (array) "[]"')
console.log(arr)

// ADICIONANDO ELEMENTOS

console.log('\n\nAdicionando elementos --> "push()"')
// push: Adiciona um elemento no final do array e devolve o novo tamanho do array
let tamanho = arr.push("Boromir")
console.log(arr)
console.log(tamanho)

// unshift: Adiciona um elemento no começo do array e devolve o novo tamanho do array
console.log('\nAdicionando elementos --> "unshift()"')
tamanho = arr.unshift("Boromir")
console.log(arr)
console.log(tamanho)

// REMOVENDO ELEMENTOS

// pop: Remove um elemento no final do array e devolve o elemento removido
console.log('\n\nRemovendo elementos --> "pop()"')
let elementoRemovido = arr.pop("Boromir")
console.log(arr)
console.log(elementoRemovido)

// shift: Remove um elemento no começo do array e devolve o elemento removido
console.log('\nRemovendo elementos --> "shift()"')
elementoRemovido = arr.shift("Boromir")
console.log(arr)
console.log(elementoRemovido)

// PESQUISANDO POR UM ELEMENTO

// includes: Verifica se um certo elemento está presente no array
console.log('\n\nPesquisando por um elemento --> "includes()"')
const inclui = arr.includes("Gandalf")
console.log(inclui)

// indexOf: Encontra o índice que possui o elemento indicado, ou -1 caso ele não exista no array
console.log('\nPesquisando por um elemento --> "indexOf()"')
const indice = arr.indexOf("Gandalf")
console.log(indice)

// CORTANDO E CONCATENANDO OS ELEMENTOS

// slice: Copia uma parte do array e devolve a parte copiada sem alterar o array original
console.log('\n\nCortando elementos --> "slice()"')
const hobbits = arr.slice(0, 4)
// Também pode ser usado com números negativos, para referenciar o final do array
const outros = arr.slice(-4)
console.log(arr)
console.log(hobbits)
console.log(outros)

// concat: Junta dois ou mais arrays e/ou itens e devolve o resultado (sem alterar nenhum dos arrays)
console.log('\nConcatenando elementos --> "concat()"')
const sociedade = hobbits.concat(outros, "Boromir")
console.log(sociedade)
console.log(hobbits)
console.log(outros)

// SUBSTITUINDO ELEMENTOS

// splice: Permite remover elementos em qualquer posição do array e substituir por novos
console.log('\n\nSubstituindo elementos --> "splice()"')
const elementosRemovidos = sociedade.splice(indice, 1, "Gandalf, o Cinzento")
console.log(sociedade)
console.log(elementosRemovidos)

// ITERANDO SOBRE OS ELEMENTOS

// Usando o for para percorrer cada elemento do array
console.log('\n\nPercorrendo elementos --> "for()"\n')
for (let indice = 0; indice < sociedade.length; indice++) {
  const elemento = sociedade[indice]
  console.log(elemento + " se encontra na posição " + indice)
}
