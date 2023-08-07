/*
Cadastro de Imóveis

Escreva um programa em javascript que funcione como um cadastro de imóveis e atenda aos seguintes requisitos:

- Deve ter um menu interativo que sempre é exibido até que o usuário escolha sair.
- O menu interativo deve mostrar no topo a quantidade de imóveis cadastrados.
- O menu deve ter a opção de salvar um imóvel.
- Para salvar um novo imóvel o programa deve pedir as seguintes informações:
    - Nome do proprietário.
    - Quantidade de quartos.
    - Quantidade de banheiros.
    - Se possui garagem.
- O menu também deve ter a opção de mostrar todos os imóveis salvos.
*/

const imóveis = []
let opção = ""

do {
  opção = prompt(
    "Bem-vindo(a) ao Cadastro de Imóveis!\n" +
      "Total de Imóveis: " +
      imóveis.length +
      "\n\nEscolha uma opção:\n1. Novo imóvel\n2. Listar imóveis\n3. Sair"
  )
  switch (opção) {
    case "1":
      const imóvel = {}
      imóvel.proprietário = prompt("Informe o nome do proprietário do imóvel:")
      imóvel.quartos = prompt("Quantos quartos possui o imóvel?")
      imóvel.banheiros = prompt("Quantos banheiros possui o imóvel?")
      imóvel.garagem = prompt("O imóvel possui garagem? (Sim/Não)")

      const confirmação = confirm(
        "Salvar este imóvel?\n" +
          "\nProprietário: " +
          imóvel.proprietário +
          "\nQuartos: " +
          imóvel.quartos +
          "\nBanheiros: " +
          imóvel.banheiros +
          "\nPossui Garagem? " +
          imóvel.garagem
      )
      if (confirmação) {
        imóveis.push(imóvel)
        alert("Imóvel salvo com sucesso!")
      } else {
        alert("Voltando ao menu.")
      }
      break
    case "2":
      for (let i = 0; i < imóveis.length; i++) {
        alert(
          "Imóvel " +
            (i + 1) +
            "\nProprietário: " +
            imóveis[i].proprietário +
            "\nQuartos: " +
            imóveis[i].quartos +
            "\nBanheiros: " +
            imóveis[i].banheiros +
            "\nPossui garagem? " +
            imóveis[i].garagem
        )
      }
      break
    case "3":
      alert("Encerrando...")
      break
    default:
      alert("Opção Inválida!")
      break
  }
} while (opção !== "3")
