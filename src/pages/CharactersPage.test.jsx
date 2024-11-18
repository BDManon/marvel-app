import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import CharactersPage from './CharactersPage';
import { BrowserRouter } from 'react-router-dom';

const characters = [
    {
        id: "1",
        name: "Thor"
    },
    {
        id: "2",
        name: "Captain America"
    }
];

// mock the useLoaderData hook, so that we can test the CharactersPage component
jest.mock('react-router', () => ({
    ...jest.requireActual('react-router'), // use actual for all non-hook parts
    useLoaderData: () => {
        return characters;
    },
}));



test('renders sort and order dropdowns', () => {
    render(<CharactersPage />, { wrapper: BrowserRouter });
    
    const sortDropdown = screen.getByLabelText(/Sort by:/i);
    expect(sortDropdown).toBeInTheDocument();
    expect(sortDropdown.value).toBe('name');
    
    const orderDropdown = screen.getByLabelText(/Order:/i);
    expect(orderDropdown).toBeInTheDocument();
    expect(orderDropdown.value).toBe('asc');

});


test('renders character names', () => {
    render(<CharactersPage />, { wrapper: BrowserRouter });
    
    characters.forEach(character => {
        const characterElement = screen.getByText(character.name);
        expect(characterElement).toBeInTheDocument();
    });
});
