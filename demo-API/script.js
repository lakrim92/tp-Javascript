console.log('connecté');

const item = document.querySelector('.banniere-titre');
// console.log(item);



document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM chargé');

    // Sélectionner l'élément pour JSONPlaceholder
    const item = document.querySelector('.banniere-titre');
    console.log(item, 'élément sélectionné pour API JSONPlaceholder');

    // Fonction pour l'API JSONPlaceholder
    async function enAttente() {
        try {
            const reponseJSON = await fetch('https://jsonplaceholder.typicode.com/todos/1');
            const reponseJS = await reponseJSON.json();
            console.log(reponseJS, 'Données JSONPlaceholder');
            
            if (item) {
                item.innerHTML = `<h1>${reponseJS.id} - ${reponseJS.title}</h1>
                <p>Complété : ${reponseJS.completed}</p>`;
            } else {
                console.error('Élément .banniere-titre non trouvé');
            }
        }
        catch(error) {
            console.log(error, "Erreur API JSONPlaceholder");
        }
    }

    enAttente();

    // Fonction pour l'API rappelConso
    async function rappelConso() {
        try {
            const reponseJSON = await fetch('https://data.economie.gouv.fr/api/v2/catalog/datasets/rappelconso0/records');
            const reponseJS = await reponseJSON.json();
            console.log(reponseJS.records, 'Données API rappelConso');
            
            const container = document.getElementById('resultat');
            if (!container) {
                console.error("L'élément avec l'ID 'resultat' n'existe pas dans le DOM");
                return;
            }
            
            reponseJS.records.forEach((item) => {
                const itemDIV = document.createElement('div');
                itemDIV.innerHTML = `<h1>${item.record.fields.reference_fiche} - ${item.record.fields.categorie_de_produit}</h1>
                <p>${item.record.fields.nature_juridique_du_rappel}</p>`;
                container.appendChild(itemDIV);
            });
        }
        catch(error) {
            console.log(error, 'Erreur API rappelConso');
        }
    }
    
    rappelConso();

// Fonction pour obtenir les données de la NASA et les afficher dans le troisième élément
async function obtenirImageNASA() {
    const API_KEY = 'VOTRE_CLE_API';  // Remplacez par votre clé API de la NASA
    const lon = -149.99078798245626;  // Longitude
    const lat = 61.21887894558012;    // Latitude
  
    // Construire l'URL de l'API
    const url = `https://api.nasa.gov/planetary/earth/assets?lon=${lon}&lat=${lat}&api_key=${API_KEY}`;
  
    try {
      // Récupérer les données de l'API
      const response = await fetch(url);
      const data = await response.json();
      console.log(data, 'Données NASA');
  
      // Extraire la dernière image et la date
      const latestImageUrl = data.url;    // L'URL de l'image la plus récente
      const latestImageDate = data.date;  // La date associée à l'image
  
      // Sélectionner l'élément dans lequel afficher les données
      const troisiemeElement = document.getElementById('troisieme-element');
  
      if (troisiemeElement) {
        // Afficher l'image et la date dans le troisième élément
        troisiemeElement.innerHTML = `
          <h2>Image de la NASA</h2>
          <p>Date de l'image : ${latestImageDate}</p>
          <img src="${latestImageUrl}" alt="Image satellite la plus récente">
        `;
      } else {
        console.error("L'élément avec l'ID 'troisieme-element' n'existe pas");
      }
  
    } catch (error) {
      console.log(error, 'Erreur lors de la récupération des données de la NASA');
    }
  }
  
  // Appeler la fonction pour obtenir les données de la NASA
  obtenirImageNASA();
});  