const resultado = prompt("Escolha uma alternativa: \n1) Javascript \n2) Python \n3) PHP")

const resultadoNumerico = parseFloat(resultado)

switch (resultadoNumerico) {
  case 1:
    alert("Javascript foi criado em 1996 por Brendan Eich")
    break
  case 2:
    alert("Python foi criado em 1991 por Guido Van Rossum")
    break
  case 3:
    alert("PHP foi criado em 1994 por Rasmus Lerdof")
    break
  default:
    alert("Finalizando...")
}