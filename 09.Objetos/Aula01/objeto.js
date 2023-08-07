/*
OBJETOS é uma estrutura do javascript para se trabalhar com dicionários chave-valor;
O par chave-valor em um objeto javascript é chamado de propriedade;
Diferente dos arrays, seus elementos não possuem nenhuma sequência;
Uma propriedade também pode ter strings, números e booleanos como chave;
Uma propriedade pode armazenar qualquer tipo de dado como valor;
Pode ser criado através de chaves {} "let objeto = {}";
Suas propriedades e funções podem ser referenciadas por encadeamento como ponto "." ou colchetes []
*/

const pessoa = {}

pessoa.nome = "Ricardo"
pessoa.idade = 37
pessoa.filhos = ["Ryan", "Theo", "Ayla"]
pessoa.endereço = {
  logradouro: "QN 7D",
  conjunto: 04,
  lote: 13,
  complemento: "Apto 103",
  cidade: "Brasília"
}
console.log(pessoa);


let matriz = [
  [0, 1, 2, 3, 4],
  [5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19],
  20,
]
console.log(matriz);