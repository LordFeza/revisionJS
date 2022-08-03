// Block de structure
// Les conditions
const a = 2;
if (a < 5) {
  console.log("a est inf à 5");
} else {
  console.log("a est sup à 5");
}

// Simplifie le if et le else : opérateur ternaire
// (condition) ? si true  : si false
console.log(a < 5 ? "a sup à 5" : "a est sup à 5");
// On peut enchaîner les ternaires
console.log(
  a < 5 ? (a < 2 ? "a est inf à 2" : "a est sup à 2") : "a est sup à 5"
);

// switch case :
let jour = "1";
switch (jour) {
  case "0":
    console.log("Samedi");
    break;
  case "1":
    console.log("C'est jour de brunch!");
  case "2":
    console.log("Lundi");
    break;
  case "3":
    console.log("Mardi");
    break;
  default:
    console.log("Un autre jour");
    break;
}

//Exercice:
// Declarer 3 variables numbers: num1, num2, num3
// Utiliser les conditions pour:
// Afficher: tous les nombres sont identiques.
// Afficher: 2 des nombres sont identique.
// Afficher: les nombres ne sont pas identiques.

// "" == false -> true
// 0 == false -> true
// [] == false -> true
// null == false -> true
// undefined == false -> true: a verifier

// "q" == true -> true
// 5 == true -> true
// ["test"] == true -> true
// undefined == true -> true : a verifier

let num1 = 10,
  num2 = 20,
  num3 = 30;

//   Une solution
// if (num1 === num2 && num1 === num3) {
//   console.log("Tous les nombres sont identiques.");
// } else {
//   if (num1 === num2 || num1 === num3 || num2 === num3) {
//     console.log("2 des nombres sont identiques.");
//   } else {
//     console.log("Les nombres ne sont pas identiques.");
//   }
// }

// Une autre solution

if (num1 === num2 && num1 === num3) {
  console.log("Tous les nombres sont identiques.");
} else if (num1 === num2 || num1 === num3 || num2 === num3) {
  console.log("2 des nombres sont identiques.");
} else {
  console.log("Les nombres ne sont pas identiques.");
}
const isAllEquals = num1 === num2 && num1 === num3;
const isTwoEquals = num1 === num2 || num1 === num3 || num2 === num3;

console.log(
  //Plus de 3 conditions on aurait choisi un switch case
  isAllEquals
    ? "Tous les nombres sont identiques."
    : isTwoEquals
    ? "2 des nombres sont identiques."
    : "Les nombres ne sont pas identiques."
);

// Les boucles
// Boucle for :
// i pour iterator/itérateur
console.log(`=========Boucles : for=========`);
for (var i = 0; i <= 10; i++) {
  console.log(`Number ${i}`);
}
console.log(i);

console.log(`=========Boucles : while=========`);
let j = 0;
// while (j <= 10) {
//   console.log(`Number j = ${j++}`);
// }

function isInfDix(number) {
  return number <= 10;
}

while (isInfDix(j)) {
  console.log(`Number j = ${++j}`);
}

do {
  console.log(`Do while Number j = ${j++}`);
} while (isInfDix(j));

let inputNumber = undefined;
do {
  inputNumber = prompt("Entrez un nombre");
} while (isNaN(inputNumber));
