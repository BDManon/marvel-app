import characters from '../data/characters.json';

export const DEFAULT_SORT = 'name';
export const DEFAULT_ORDER = 'asc';

// Fonction qui retourne la liste des personnages triée
export function getCharacters({ sort = DEFAULT_SORT, order = DEFAULT_ORDER } = {}) {
    // console.log('sortBy', sort);
    // console.log('sortDirection', order);
    return characters.slice().sort((a, b) => {
        if (sort === DEFAULT_SORT) {
            if (order === DEFAULT_ORDER) {
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
