import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import CharactersPage from './CharactersPage';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';

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


// Vérification des listes déroulantes de tri et d'ordre sont correctement rendues.
test('renders sort and order dropdowns', () => {
    render(
        <MemoryRouter>
            <CharactersPage />
        </MemoryRouter>
    )
    
    const sortDropdown = screen.getByLabelText(/Sort by:/i);
    expect(sortDropdown).toBeInTheDocument();
    expect(sortDropdown.value).toBe('name');
    
    const orderDropdown = screen.getByLabelText(/Order:/i);
    expect(orderDropdown).toBeInTheDocument();
    expect(orderDropdown.value).toBe('asc');

});

test('renders sort and order dropdowns', () => {

    const sort ='modified';
    const order ='desc';

    render(
        <MemoryRouter initialEntries={[`/?order=modified&sort=desc`]}>
            <CharactersPage />
        </MemoryRouter>
    )
    screen.debug();

    const sortDropdown = screen.getByTestId('sort');
    expect(sortDropdown).toHaveValue(sort);
    console.log(sortDropdown);

    const orderDropdown = screen.getByTestId('order');
    expect(orderDropdown).toHaveValue(order);

});


// Affiche des noms de tous les personnages correctement.
test('renders character names', () => {
    render(<CharactersPage />, { wrapper: BrowserRouter });
    
    characters.forEach(character => {
        const characterElement = screen.getByText(character.name);
        expect(characterElement).toBeInTheDocument();
    });
});


// test fonction CharactersList
test('renders characters list', () => {
    render(<CharactersPage />, { wrapper: BrowserRouter });
    
    const charactersList = screen.getByRole('list');
    expect(charactersList).toBeInTheDocument();
});


// test fonction NumberOfCharacters
test('renders number of characters', () => {
    render(<CharactersPage />, { wrapper: BrowserRouter });
    
    const numberOfCharacters = screen.getByText(/There are \d+ characters/i);
    expect(numberOfCharacters).toBeInTheDocument();
    expect(numberOfCharacters).toHaveTextContent('There are 11 characters');
});

