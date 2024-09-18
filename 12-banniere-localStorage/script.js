console.log('connecté');

// Je selectionne et je stocke
// bouton .btn-success;
const btnSuccess = document.querySelector('.btn-success');
console.log(btnSuccess);

// DIV cookies;
const cookies = document.querySelector('.cookies');
console.log(cookies);

// Je stocke la valeur du localStorage
let valeurCle = localStorage.getItem('banniere');
console.log(valeurCle, "valeur de la clé");

// Je déclare la fonction
function check() {
    if (valeurCle) {
        console.log("stockage existe");
        cookies.remove();
    }else{
        console.log("stockage n'existe pas");
;
    }
};

// J'appelle la fonction
check();

btnSuccess.addEventListener('click', function() {

    // Je crée le localStorage avec la valeur "oui";
    localStorage.setItem('banniere', 'oui')
    console.log('bouton cliqué');
    cookies.style.opacity = "0";
});



