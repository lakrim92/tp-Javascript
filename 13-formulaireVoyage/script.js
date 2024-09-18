console.log('connecté'); 

// le formulaire
const form = document.getElementById('form');
// console.log(form);

// Les champs - input text et inpudddte date
const pays = document.getElementById('pays');
// console.log(pays);
const start = document.getElementById('start');
// console.log(start);
const end = document.getElementById('end');
// console.log(end);
const lsiteResultats = document.querySelector('.liste-resultats');

const voyages = [
    {
        pays : "borabora",
        prix : 1790,
        voyageurs : 4
    },
    {
        pays : "bahamas",
        prix : 1790,
        voyageurs : 4
    },
    {
        pays : "bahamas",
        prix : 1490,
        voyageurs : 2
    },
    {
        pays : "tahiti",
        prix : 1790,
        voyageurs : 4
    }


]
// Je vérifie le contenu de voyages
console.log(voyages, "tableau voyages");

form.addEventListener('submit', function(e) {
    // J'empeche le raffraichissement de la page
    e.preventDefault();
    console.log("Formulaire validé");

    // Je stocke les valeurs dans l'objet choix
    const choix = {
        pays : pays.value,
        start : start.value,
        end : end.value
    };
    console.log(choix, "choix");

    // Je transforme l'objet
    const choixString = JSON.stringify(choix);
    console.log(choixString);

    // Je place l'objet dans le localStorage
    localStorage.setItem('details', choixString);

    // on rafraichit la page pour faire apparaitre les inforamtions
    window.location.href = window.location.href;
});

function displayDetails() {
    console.log('fonction déclenchée');
    const choixObjet =JSON.parse(localStorage.getItem('details'));
    console.log(choixObjet, "choixObjet");

    // Pré-remplir les champs
    pays.value = choixObjet.pays;
    start.value = choixObjet.start;
    end.value = choixObjet.end;

    // filtrer en fonctions des pays rengistré
    const resultats = voyages.filter((
        voyage) => voyage.pays === pays.value
    );
    console.log(resultats, "resultats");

    // Boucle dans le tableau
    resultats.forEach(resultat => {
        console.log(resultat, "résultat");

        // JE crée une DIV avec les valeurs à l'interieur
        const item = `
                     <div class="item">
                     <p class="item-pays">
                        ${resultat.pays}
                     </p>
                     <p>
                     Offre pour ${resultat.voyageurs} personnes
                     </p>
                     <p>
                     prix vol inclus ${resultat.prix} €
                     </p>
                     <button>Go !</button>
                     </div>   
                     `;
                     lsiteResultats.innerHTML += item;
    });
};
displayDetails();