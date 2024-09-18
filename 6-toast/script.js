console.log("connecté !");

// Je sélectionne et je stocke
const btn = document.querySelector('.btn');
console.log(btn);

// Je sélectionne et stocke la DIV container-notifications
const ctn = document.querySelector('.container-notifications');
console.log(ctn);

// Evenement du click sur le bouton
btn.addEventListener('click', function() {
    console.log('bouton cliqué');

    // Je crée un élement
const notification = document.createElement('div');
console.log(notification);

    // Je donne un style à la DIV
    notification.classList.add('toast');

    //  J'insère du contenu texte
    notification.innerText = "Votre fichier est bien enregistré !"
    console.log(notification);

    // Jaccroche notification à l'élément ctn
    ctn.appendChild(notification);

    //  À la fin du chrono, je retire la notification de DOM
    setTimeout(function() {
        notification.remove();
    }, 2000);
});

