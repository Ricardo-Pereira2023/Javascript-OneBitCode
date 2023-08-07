function dobro(x) {
  alert("O dobro de " + x + " é " + x * 2)
}
// dobro(5)

function soma(a, b) {
  alert("O resultado da soma é " + (a + b))
}
// soma(5, 5)

function novoUsuário(nome, email, senha, tipo = "admin") {
  const usuário = {
    nome,
    email,
    senha,
    tipo,
  }
  console.log(usuário)
}
novoUsuário("Ricardo", "rpricardinho@hotmail.com", "1234")
