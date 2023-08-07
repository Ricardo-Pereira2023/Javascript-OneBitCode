/*
 Menu Interativo

Escreva um programa em javascript que simule um menu interativo com 5 opções diferentes. O programa deverá iniciar mostrando as 5 opções disponíveis, as quatro primeiras não precisam de nenhuma funcionalidade específica, a última opção deve ser a opção “Encerrar”. Ao clicar em alguma das quatro primeiras opções uma mensagem deve ser exibida na tela indicando qual foi a opção escolhida e depois o programa deve exibir novamente o menu com as 5 opções. Isso deve continuar acontecendo até que o usuário escolha a opção “Encerrar”. Ao escolhe-la uma mensagem dizendo que o sistema está sendo encerrado deve ser exibida na tela e então o programa é finalizado.
*/

let opcao = 5

do {
  opcao = parseInt(
    prompt(
      "Seja bem-vindo (a)\n" +
        "\nEscolha uma das opçõesa abaixo:" +
        "\n1. Javascript" +
        "\n2. Python" +
        "\n3. PHP" +
        "\n4. Java" +
        "\n5. Encerrar"
    )
  )
  switch (opcao) {
    case 1:
      alert("Javascript foi criado em 1996 por Brendan Eich")
      break
    case 2:
      alert("Python foi criado em 1991 por Guido Van Rossum")
      break
    case 3:
      alert("PHP foi criado em 1994 por Rasmus Lerdof")
      break
    case 4:
      alert(
        "Java foi criado em 1991 por Patrick Naugthon, Sun Fellow e James Gosling"
      )
      break
    case 5:
      alert("Encerrando...")
      break
    default:
      alert("Opção inválida")
      break
  }
} while (opcao !== 5)
