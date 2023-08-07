/*
Calculadora Geométrica

Escreva um programa em javascript para calcular a área de diferentes formas geométricas. 
O programa deve iniciar com um menu contendo as diferentes opções de cálculos. As opções devem ser:

- área do triângulo: base * altura / 2
- área do retângulo: base * altura
- área do quadrado: lado²
- área do trapézio: (base maior + base menor) * altura / 2
- área do círculo: pi * raio² (considere pi = 3.14)

Você deve escrever o programa usando funções sempre que possível para separar os procedimentos. 
O programa também deve ter uma opção de “Sair” e enquanto ela não for escolhida deverá voltar ao menu.

*/

function calcularAreaTriangulo() {
  const base = parseFloat(prompt("Informe a base do triângulo:"))
  const altura = parseFloat(prompt("Informe a altura do triângulo:"))
  return (base * altura) / 2
}

function calcularAreaRetangulo() {
  const base = parseFloat(prompt("Informe a base do Retângulo:"))
  const altura = parseFloat(prompt("Informe a altura do Retângulo:"))
  return base * altura
}

function calcularAreaQuadrado() {
  const lado = parseFloat(prompt("Informe a área do Quadrado:"))
  return lado * lado
}

function calcularAreaTrapezio() {
  const baseMenor = parseFloat(prompt("Informe a base menor do trapézio:"))
  const baseMaior = parseFloat(prompt("Informe a base maior do trapézio:"))
  const altura = parseFloat(prompt("Informe a altura do trapézio:"))
  return ((baseMaior + baseMenor) * altura) / 2
}

function calcularAreaCirculo() {
  const raio = parseFloat(prompt("Informe o raio do círculo:"))
  return 3.14 * raio * raio
}

function exibirMenu() {
  return prompt(
    "Calculadora Geométrica\n" +
      "1. Calcular a área do triângulo\n" +
      "2. Calcular a área do Retângulo\n" +
      "3. Calcular a área do Quadrado\n" +
      "4. Calcular a área do Trapézio\n" +
      "5. Calcular a área do Círculo\n" +
      "6. Sair\n"
  )
}

function executar() {
  let opção = ""

  do {
    opção = exibirMenu()
    let resultado

    switch (opção) {
      case "1":
        resultado = calcularAreaTriangulo()
        break
      case "2":
        resultado = calcularAreaRetangulo()
        break
      case "3":
        resultado = calcularAreaQuadrado()
        break
      case "4":
        resultado = calcularAreaTrapezio()
        break
      case "5":
        resultado = calcularAreaCirculo()
        break
      case "6":
        alert("Saindo...")
        break
      default:
        alert("Opção Inválida!")
        break
    }

    if (resultado) {
      alert("Resultado: " + resultado)
    }
  } while (opção !== "6")
}
executar()
