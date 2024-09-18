console.log("connecté !");

// Je sélectionne et je stocke
// l'icone burger
const icone = document.querySelector('.navbar-mobile i');
console.log(icone);

// La DIV modal
const modal = document.querySelector('.modal');
console.log(modal);

icone.addEventListener('click', function() {
    console.log("icone cliqué");
    modal.classList.toggle('change-modal');
    icone.classList.toggle('fa-times');
});