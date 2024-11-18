// FILEPATH: /c:/Users/mbonna13/Documents/marvel-app/src/api/__tests__/characters-api.test.js
import { getCharacters, getCharacterById } from './characters-api';
import characters from '../data/characters.json';
import { getSortedCharacters } from './characters-api';

jest.mock('../data/characters.json', () => [
    { id: 1, name: 'Iron Man' },
    { id: 2, name: 'Captain America' },
    { id: 3, name: 'Thor' }
]);
// FILEPATH: /c:/Users/mbonna13/Documents/marvel-app/src/api/__tests__/characters-api.test.js

jest.mock('../data/characters.json', () => [
    { id: 1, name: 'Iron Man', modified: '2023-01-01' },
    { id: 2, name: 'Captain America', modified: '2023-01-02' },
    { id: 3, name: 'Thor', modified: '2023-01-03' }
]);

// Test des fonctions getCharacters
describe('getCharacters', () => {
    it('should return the list of characters sorted by name in ascending order by default', () => {
        const result = getCharacters();
        expect(result[0]).toEqual({ id: 2, name: "Captain America", modified: '2023-01-02' });
        expect(result[1]).toEqual({ id: 1, name: "Iron Man", modified: '2023-01-01' });
        expect(result[2]).toEqual({ id: 3, name: "Thor", modified: '2023-01-03' });
    });

    it('should return the list of characters sorted by name in descending order', () => {
        const result = getCharacters({ order: 'desc' });
        expect(result[0]).toEqual({ id: 3, name: "Thor", modified: '2023-01-03' });
        expect(result[1]).toEqual({ id: 1, name: "Iron Man", modified: '2023-01-01' });
        expect(result[2]).toEqual({ id: 2, name: "Captain America", modified: '2023-01-02' });
    });

    it('should return the list of characters sorted by modified date in ascending order', () => {
        const result = getCharacters({ sort: 'modified' });
        expect(result[0]).toEqual({ id: 1, name: "Iron Man", modified: '2023-01-01' });
        expect(result[1]).toEqual({ id: 2, name: "Captain America", modified: '2023-01-02' });
        expect(result[2]).toEqual({ id: 3, name: "Thor", modified: '2023-01-03' });
    });

    it('should return the list of characters sorted by modified date in descending order', () => {
        const result = getCharacters({ sort: 'modified', order: 'desc' });
        expect(result[0]).toEqual({ id: 3, name: "Thor", modified: '2023-01-03' });
        expect(result[1]).toEqual({ id: 2, name: "Captain America", modified: '2023-01-02' });
        expect(result[2]).toEqual({ id: 1, name: "Iron Man", modified: '2023-01-01' });
    });
});

// Test de la fonction getCharacterById
describe('getCharacterById', () => {
    it('should return the correct character when a valid ID is provided', () => {
        const id = 1;
        const result = getCharacterById(id);
        expect(result).toEqual({ id: 1, name: 'Iron Man', modified: '2023-01-01' });
    });

    it('should throw an error when an invalid ID is provided', () => {
        const invalidId = 999;
        expect(() => getCharacterById(invalidId)).toThrow(`Character with id ${invalidId} not found`);
    });
});
