let heroName = "LiviaTFT";
let heroXp = 7200;
let level = "";

if (heroXp <= 1000) {
  level = "Ferro";
} else if (heroXp <= 2000) {git init
  level = "Bronze";
} else if (heroXp <= 5000) {
  level = "Prata";
} else if (heroXp <= 7000) {
  level = "Ouro";
} else if (heroXp <= 8000) {
  level = "Platina";
} else if (heroXp <= 9000) {
  level = "Esmeralda";
} else if (heroXp <= 10000) {
  level = "Diamante";
} else {
  level = "Mestre Desafiante";
}

console.log("O Herói de nome " + heroName + " está no nível de " + level);

