
import { getCharacters, getCharacterById } from './characters-api';

// jest.mock('../data/characters.json', () => [
//     { id: 1, name: 'Iron Man' },
//     { id: 2, name: 'Captain America' },
//     { id: 3, name: 'Thor' }
// ]);


const character1 = { id: 1, name: "Iron Man", modified: '2023-01-01' }
const character2 ={ id: 2, name: "Captain America", modified: '2023-01-02' }
const character3 = { id: 3, name: "Thor", modified: '2023-01-03' }
const character4 = { id: 4, name: "Thor", modified: '2023-01-03' }

jest.mock('../data/characters.json', () => [
    character1,
    character2,
    character3,
    character4
]);

// Test des fonctions getCharacters
describe('getCharacters', () => {
    it('should return the list of characters sorted by name in ascending order by default', () => {
        const result = getCharacters();
        expect(result[0]).toEqual(character2);
        expect(result[1]).toEqual(character1);
        expect(result[2]).toEqual(character3);
    });

    it('should return the list of characters sorted by name in descending order', () => {
        const result = getCharacters({ order: 'desc' });
        console.log(result)
        expect(result[0]).toEqual(character3);
        expect(result[1]).toEqual(character4);
        expect(result[2]).toEqual(character1);
        expect(result[3]).toEqual(character2);
    });

    it('should return the list of characters sorted by modified date in ascending order', () => {
        const result = getCharacters({ sort: 'modified' });
        expect(result[0]).toEqual(character1);
        expect(result[1]).toEqual(character2);
        expect(result[2]).toEqual(character3);
    });

    it('should return the list of characters sorted by modified date in descending order', () => {
        const result = getCharacters({ sort: 'modified', order: 'desc' });
        console.log(result)
        expect(result[0]).toEqual(character3);
        expect(result[1]).toEqual(character4);
        expect(result[2]).toEqual(character2);
        expect(result[3]).toEqual(character1);
    });
});

// Test de la fonction getCharacterById
describe('getCharacterById', () => {
    it('should return the correct character when a valid ID is provided', () => {
        const id = 1;
        const result = getCharacterById(id);
        expect(result).toEqual(character1);
    });

    it('should throw an error when an invalid ID is provided', () => {
        const invalidId = 999;
        expect(() => getCharacterById(invalidId)).toThrow(`Character with id ${invalidId} not found`);
    });
});
