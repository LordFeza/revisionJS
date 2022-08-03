// Types : chaînes de caractères / String :
console.log('Une chaîne de caractère avec "double guillemet"');

// var textVar = "Du texte dans une variable appelée textVar";
// Déclarer ou définir une variable
let textVar = "Du texte dans une variable appelée textVar";
const constText = "Du texte qui ne peut pas changer"; // on ne peut pas modifier une constante
const bonjour = "Mbote";
let userName = "Nom";
let userFirstName = "Prénom";
let boni = "Boni yo?";

// Lire la variable
console.log("Log d'une variable ===> " + textVar);
console.log("Log d'une constante ===> " + constText);

// Modifier la valeur de la variable : affecter
textVar = "Le texe a changé !";

// Lire la variable après changement
console.log("Log d'une variable dont on a modifié la valeur ===> " + textVar);
console.log(
  "Log d'un exemple de concaténation ===> " +
    userFirstName +
    " " +
    userName +
    ", " +
    bonjour +
    "!" +
    " " +
    boni
);

// Templates string / Littéraux de gabarits
console.log(`Log d'un exemple de Templates string ===> Salut, ${boni} bana?`);
document.write(
  `<p>Affichage d'un exemple de Templates string avec insertion d'un paragraph dans le body avec document.write() ===> Hi sweetie, ${boni} bana?</p>`
);

// 1-Numbers/Nombres : integer/entier, float/double/décimaux
console.log(`=========Numbers/Nombres=========`);
console.log("25");
console.log(25);

const add = 25 + 10;
console.log(add);

const sub = 25 - 10;
console.log(add);

const mul = 25 * 10;
console.log(mul);

const div = 25 / 10;
console.log(div);

const pow = 25 ** 10;
console.log(pow);

const rest = 25 % 7;
console.log(rest);
// Arrondir un nombre
console.log((25 / 7).toPrecision(2));
console.log(Math.floor(25 / 7));
// Un nombre aléatoire entre 0 et 100
console.log(50 + Math.floor(Math.random() * 100 - 50));
console.log(Math.floor(Math.random() * 101));
// Un nombre aléatoire entre 50 et 125
console.log(Math.floor(Math.random() * (125 - 50 + 1)) + 50);
document.write(Math.floor(Math.random() * (125 - 50 + 1)) + 50);
console.log(Math.trunc(25 / 7));
const a = 10;
const b = 20;
console.log(`Le résultat : ${a + b}`);

//Exercice:
//Déclarer 3 variables: nom:string, prenom:string, age:number
//Afficher: Bonjour, (nom) (prenom). Vous avez (age)ans. Dans un an votre age sera: (age + 1)

const nom = "Lukanga Feza";
const prenom = "Gaylord";
const age = 99;

console.log(
  `Bonjour, ${nom} ${prenom}
  }. Vous avez ${age} ans. Dans un an, votre âge sera : ${age + 1} ans.😀`
);

// Type boolean
const vrai = true;
const faux = false;

// Opérateur logique ET - &&
// true && true = true
// true && false = false
// false && true = false
// false && false = false

// Opérateur logique OU - ||
// true || true = true
// true || false = true
// false || true = true
// false || false = false

// Opérateur logique XOR - (true && false) || (false && true) :
// true xor true = false
// true xor false = true
// false xor true = true
// false xor false = false

const rien = null; // Zéro n'est pas rien, c'est un nombre.
console.log(rien);
const indefini = undefined;
console.log(indefini);

// Arrays/Les tableaux
let testList = [vrai, "Lord", indefini, age, nom];
console.log(testList);
console.log(testList[1]);
console.log("Elément du tableau en position 0 :", testList[0]);
console.log("Elément du tableau en position 4 :", testList[4]);
console.log("Dernier élément du tableau :", testList[testList.lenght - 1]);

let prixList = [20, 22, 50, 1, 36, 10, 45];
prixList.filter(function (element, index) {
  console.log("element", element);
  console.log("index", index);
});

let listFilter = prixList.filter(function (element, index) {
  return element >= 20; //retourne un boolean : on garde l'élément si true.
});
console.log("Liste filtrée: ", listFilter);

//Multiplier par 2 les éléments filtrés
let listFilterMap = prixList.map(function (element, index) {
  return element * 2;
});
console.log("Liste filtrée: ", listFilter);

//Divisible par 2
let listFilterRest = prixList
  .filter(function (element, index) {
    return element % 2 === 0;
  })
  .map(function (element, index) {
    return element / 2;
  });
console.log("Liste filtrée: ", listFilter);

listFilter.forEach(function (element, index) {
  listFilter[index] = `<p>${element}</p>`;
});
console.log(listFilter);

listFilter.forEach(function (element, index, list) {
  console.log(list);
  listFilter[index] = `<p>${element}</p>`;
});
console.log(listFilter);
