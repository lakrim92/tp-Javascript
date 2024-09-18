console.log("connecté !");
//let titre = document.getElementById('titre');
titre.style.color = "green"; 


// titre = 2; 
// console.log(titre); // renvoie 2

let score = 0;
// console.log(score, "initialisation"); // Je vérifie

score = score + 1; //Opération
// console.log(score, "apres addition"); // Je vérifie
// Je stocke
// ici votre code

// Je stocke
// ici votre code

// Je soumets l'élément à une action
// ici votre code

// Je stocke une chaîne de caractères
const cours = "Javascript"; 
// Je vérifie
// console.log(cours, "cours"); 

// Je concatène
const mot1 = "Hello"; 
const mot2 = "World!";
const phrase = mot1 + " " + mot2 // concaténation
//console.log(phrase, "phrase"); // Je vérifie

// Calcul
let calcul = "0"; // Je stocke
calcul = calcul + 1; // Addition
console.log(calcul, "calcul"); // Je vérifie

// let titre = document.getElementById('titre');

// Je selectionne et je stocke
const btnRed = document.getElementById('btn-red');
// console.log(btnRed, "boutton rouge");
const btnblue = document.getElementById('btn-blue');
console.log(btnblue)

let compteur = 0;
console.log(compteur, "compteur au démarrage");

// Je soumets le cercle à une action
btnRed.addEventListener('click', function() {
    // console.log("cliqué!");
    // Ici l'action
    // Incrémenter le compteur de 1
    add();
});

btnblue.addEventListener('click', function() {
    // console.log("cliqué!");
    // Ici l'action
    // Incrémenter le compteur de 1
    add();
});

function add() {
    compteur = compteur + 1;
    console.log(compteur, "compteur apres incrementation");
    titre.innerText = compteur;
};

setTimeout(function() {
    //Je supprime les cercles
    btnRed.remove();
    btnblue.remove();
}, 10000);

// btnBlue.remove(); 
//     btnRed.remove(); 
//     titre.innerText = "Vous avez marqué" + " " + compteur + " " + "points";