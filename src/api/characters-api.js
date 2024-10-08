import characters from '../data/characters.json';


// Fonction qui retourne la liste des personnages
export function getCharacters() {
    return characters;
}

// Fonction qui retourne un character en fonction de son id
export function getCharacterById(id) {
    const character= characters.find((character) => character.id === id);
    if (!character) {
        throw new Error(`Character with id ${id} not found`);
    }
    return character;
}

