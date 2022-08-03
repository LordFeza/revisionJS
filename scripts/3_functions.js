// Les functions sont des objets
// this pointe vers l'objet
console.log(this);

function pesaMbote() {
  const mbote = "Mbote!";
  console.log(mbote);
}

// Pour exécuter la fonction
pesaMbote();

console.log("du code au milieu");

pesaMbote();
