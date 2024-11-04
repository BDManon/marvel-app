// FILEPATH: /c:/Users/mbonna13/Documents/marvel-app/src/api/__tests__/characters-api.test.js
import { getCharacters, getCharacterById } from './characters-api';
import characters from '../data/characters.json';

jest.mock('../data/characters.json', () => [
    { id: 1, name: 'Iron Man' },
    { id: 2, name: 'Captain America' },
    { id: 3, name: 'Thor' }
]);

describe('getCharacters', () => {
    it('should return the list of characters', () => {
        const result = getCharacters();
        expect(result).toEqual(characters);
    });
});

describe('getCharacterById', () => {
    it('should return the correct character when a valid ID is provided', () => {
        const id = 1;
        const result = getCharacterById(id);
        expect(result).toEqual({ id: 1, name: 'Iron Man' });
    });

    it('should throw an error when an invalid ID is provided', () => {
        const invalidId = 999;
        expect(() => getCharacterById(invalidId)).toThrow(`Character with id ${invalidId} not found`);
    });
});
