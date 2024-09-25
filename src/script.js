// src/script.js

async function getCharacters() {
    try {
      const response = await fetch('http://127.0.0.1:5501/src/data/characters.json');
      
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des données');
      }
  
      const data = await response.json();
      console.log(data); // Affiche les données dans la console
  
    } catch (error) {
      console.error('Erreur:', error);
    }
}
  
  // Appeler la fonction pour récupérer et afficher les données
getCharacters();
