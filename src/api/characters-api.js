import characters from '../data/characters.json';


// Fonction qui retourne la liste des personnages triée
export function getCharacters({ sortBy = 'name', sortDirection = 'asc' } = {}) {
    return characters.slice().sort((a, b) => {
        if (sortDirection === 'asc') {
            return a[sortBy].localeCompare(b[sortBy]);
        } else {
            return b[sortBy].localeCompare(a[sortBy]);
        }
    });
}

// Fonction qui retourne un character en fonction de son id
export function getCharacterById(id) {
    const character= characters.find((character) => character.id === id);
    if (!character) {
        throw new Error(`Character with id ${id} not found`);
    }
    return character;
}
