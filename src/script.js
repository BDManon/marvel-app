// src/script.js

async function getCharacters() {
    try {
      const response = await fetch('http://127.0.0.1:5501/src/data/characters.json');
      
      if (!response.ok) {
        throw new Error('Erreur lors de la récupération des données');
      }
  
      const data = await response.json();
      console.log(data); // Affiche les données dans la console

      // Afficher les noms du JSON en li (à la place du html)
      // Récupérer l'élément ul avec l'ID "characters"
      const charactersList = document.getElementById('characters');
      // Parcourir les données et créer un élément li pour chaque personnage
      data.forEach(character => {
        const li = document.createElement('li');
        li.textContent = character.name; // Assurez-vous que les objets dans le JSON ont un attribut 'name'
        charactersList.appendChild(li);
      });
  
    } catch (error) {
      console.error('Erreur:', error);
    }
}
  
  // Appeler la fonction pour récupérer et afficher les données
getCharacters();
