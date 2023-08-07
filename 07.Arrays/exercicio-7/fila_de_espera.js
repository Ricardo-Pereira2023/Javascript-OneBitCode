/*
## Fila de Espera

Escreva um programa em javascript para simular uma fila de espera em um consultório médico. O programa deve iniciar mostrando na tela um menu interativo contendo a lista de todos os pacientes esperando em ordem mostrando sua posição ao lado do nome (ex.: 1º Matheus, 2º Marcos, etc). O menu também deve permitir escolher entre as opções de “Novo paciente”, para adicionar um novo paciente ao fim da fila (pedindo o nome do paciente), “Consultar paciente”, que retira o primeiro paciente da fila e mostra na tela o nome do paciente consultado, e “Sair”. O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu.
*/

alert(
  "---------------------------------------------------\n" +
    "Seja bem-vindo(a) ao Consultório do Dr. Rick\n" +
    "---------------------------------------------------\n\n"
)

let fila = []
let opcao = ""
let saida = []

do {
  let pacientes = ""
  for (let i = 0; i < fila.length; i++) {
    pacientes += i + 1 + " º - " + fila[i] + "\n"
  }

  opcao = Number(
    prompt(
      "Pacientes:\n" +
        pacientes +
        `\nPacientes Consultados:\n` +
        saida +
        "\nEscolha uma ação:\n1. Novo paciente\n2. Consultar paciente\n3. Sair"
    )
  )

  switch (opcao) {
    case 1:
      const novoPaciente = prompt("Qual é o nome do paciente?")
      fila.push(novoPaciente)
      break
    case 2:
      const pacienteConsultado = fila.shift()
      if (pacienteConsultado) {
        alert(`A consulta do(a) paciente ${pacienteConsultado} foi finalizado(a).`)
        saida += pacienteConsultado + "\n"
      } else {
        alert("Não há pacientes na fila!")
      }
      break
    case 3:
      alert("Encerrando...")
      break
    default:
      alert("Opção inválida!")
      break
  }
} while (opcao !== 3)
