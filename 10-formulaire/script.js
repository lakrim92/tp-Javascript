console.log('connecté'); 

// 1 - Je sélectionne et stocke tous les éléments nécessaires
const form = document.getElementById('formulaire'); 
const prenom = document.getElementById('prenom'); 
const nom = document.getElementById('nom'); 
const email = document.getElementById('email'); 
const message = document.getElementById('message');

const msgError = document.querySelectorAll('.error'); 
const titre = document.getElementById('titre'); 

// Je détecte la validation du formulaire
form.addEventListener('submit', function(e) {
    e.preventDefault(); 
    console.log('formulaire envoyé'); 

    // Je récupère les valeurs de chacun des inputs
    const prenomValue = prenom.value.trim(); 
    const nomValue = nom.value.trim(); 
    const emailValue = email.value.trim(); 
    const messageValue = message.value.trim(); 

    // Amélioration de l'Expérience Utilisateur
    // Tous les messages d'erreur sont invisibles
    msgError.forEach(error => {
        error.classList.add('invisible'); 
    }); 

    let isValid = true;

    // Validation du prénom
    if (prenomValue.length < 2 || prenomValue.length > 10) {
        console.log('erreur prenom'); 
        prenom.nextElementSibling.classList.remove('invisible');
        isValid = false;
    }

    // Validation du nom
    if (nomValue.length < 3 || nomValue.length > 15) {
        console.log('erreur nom'); 
        nom.nextElementSibling.classList.remove('invisible');
        isValid = false;
    }

    // Validation du message
    if (messageValue.length < 10 || messageValue.length > 100) {
        console.log('erreur message'); 
        message.nextElementSibling.classList.remove('invisible');
        isValid = false;
    }

    // Si toutes les validations sont correctes
    if (isValid) {
        console.log('succès');
        titre.innerText = "Merci" + " " + prenomValue + " \n" + "Votre message a bien été envoyé !";
        form.remove();  
    }
});
