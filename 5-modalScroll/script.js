console.log("connecté !");

// Je sélectionne et je stocke la DIV modal-container
const modal = document.querySelector('.modal-container');
console.log(modal);

// Je sélectionne le bouton
const btn = document.querySelector('.btn-success');
console.log(btn);

// Je sélectionne le code
const code = document.querySelector('.code');
console.log(code);

// Je sélectionne l'icone
const icone = document.querySelector('.fa-times');
console.log(icone);

window.addEventListener('scroll', displayModal);
    // console.log('défilement détecté ! ');

function displayModal() {
    console.log('défilement detecté !')

    // Nombre de pixels parcourus depuis le haut de la page (scrollTop)
    let hauteur = document.documentElement.scrollTop;
    console.log(hauteur, 'pixels depuis le haut de la page');

    if (hauteur > 400) {
        console.log('Affiche le modal !');
        modal.style.display = "flex";
    };
}

btn.addEventListener('click', function() {
    console.log('bouton cliqué');

    // Je rends visible le code
    code.style.display = "block";

    // Je rends invisible le bouton 
    btn.style.display = "none";
});

icone.addEventListener('click', function() {
    console.log('icone cliqué');

    // Je rends invisible la DIV modal-container
    modal.style.display = 'none';

    // J'annule l'évenement
    window.removeEventListener('scroll', displayModal);
});