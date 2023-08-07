// Cálculo de Dano

/* Escreva um programa que permita inserir o nome e o poder de ataque de um personagem, depois o nome, a quantidade de pontos de vida, o poder de defesa de outro personagem e se ele possui um escudo, e então calcule a quantidade de dano causado baseado nas seguintes regras:

// - Se o poder de ataque for maior do que a defesa e o defensor não possuir um escudo, o dano causado será igual a diferença entre o ataque e a defesa.
// - Se o poder de ataque for maior do que a defesa e o defensor possuir um escudo, o dano causado será igual a metade da diferença entre o ataque e a defesa.
// - Se o poder de ataque for menor ou igual a defesa, o dano causado será 0.

// Por fim, o programa deve subtrair a quantidade de dano da quantidade de pontos de vida do personagem defensor e exibir na tela a quantidade de dano e as informações atualizadas de ambos os personagens. */


const attackingCharacter = prompt("What is the name of Attacking Character?")
const attackPower = parseFloat(prompt("What are the attack of power of Attacking Character?"))

const defenderCharacter = prompt("What is the name of Defender Character?")
let totalHealth = parseFloat(prompt("What are the health points of Defender Character?"))
const defensePower = parseFloat(prompt("What are defense power of Defender Character?"))
const shield = prompt("Does the Defending Character have a shield? (Yes/No)?")

let damage = 0

if (attackPower > defensePower && shield === "No") {
  damage = attackPower - defensePower
  alert("IT'S A POWERFUL ATTACK!" +
    "\nCRITICAL DAMAGE!")
} else if (attackPower > defensePower && shield === "Yes") {
  damage = (attackPower - defensePower) / 2 
} else {
  alert ("HAHAHAHAHA!" + 
  "\nYOUR ATTACK DIDN'T EVEN TICKLE !!!" +
  "\nMY DEFENSE IS MOST POWERFUL AND IMPENETABLE !!!")
}

remainingHealth = totalHealth - damage

alert(attackingCharacter + " caused " + damage + " damage in the " + defenderCharacter) 
alert(
  attackingCharacter + "\nAttack of Power: " + attackPower + "\n\n" +
  defenderCharacter + "\nTotal Health: " + totalHealth +
  "\nRemaining Health: " + remainingHealth +
  "\nDefense Power: " + defensePower + "\nHas Shield: " + shield 
)
