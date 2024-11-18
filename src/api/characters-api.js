import characters from '../data/characters.json';


// Fonction qui retourne la liste des personnages triée
export function getCharacters({ sort = 'name', order = 'asc' } = {}) {
    // console.log('sortBy', sort);
    // console.log('sortDirection', order);
    return characters.slice().sort((a, b) => {
        if (sort === 'name') {
            if (order === 'asc') {
                return a.name.localeCompare(b.name);
            } else {
                return b.name.localeCompare(a.name);
            }
        } else if (sort === 'modified') {
            const dateA = new Date(a.modified);
            const dateB = new Date(b.modified);
            if (order === 'asc') {
                return dateA - dateB;
            } else {
                return dateB - dateA;
            }
        }
        return 0; // Default case if sort parameter is not recognized
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
