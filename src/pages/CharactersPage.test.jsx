// FILE: src/pages/CharactersPage.test.jsx

import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CharactersPage from './CharactersPage';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { da } from 'date-fns/locale';

const characters = [
    {
        id: "1",
        name: "Thor",
        date: "2021-09-01T00:00:00Z"
    },
    {
        id: "2",
        name: "Captain America",
        date: "2021-09-02T00:00:00Z"
    }
];

// mock the useLoaderData hook, so that we can test the CharactersPage component
jest.mock('react-router', () => ({
    ...jest.requireActual('react-router'), // use actual for all non-hook parts
    useLoaderData: () => {
        return characters;
    },
}));

describe('CharactersPage Component', () => {

    test('renders correctly', () => {
        render(
            <MemoryRouter>
                <CharactersPage />
            </MemoryRouter>
        );
        expect(screen.getByText('Marvel Characters')).toBeInTheDocument();
    });

    test('renders sort and order dropdowns', () => {
        render(
            <MemoryRouter>
                <CharactersPage />
            </MemoryRouter>
        );
        
        const sortDropdown = screen.getByLabelText(/Sort by:/i);
        expect(sortDropdown).toBeInTheDocument();
        expect(sortDropdown.value).toBe('name');
        
        const orderDropdown = screen.getByLabelText(/Order:/i);
        expect(orderDropdown).toBeInTheDocument();
        expect(orderDropdown.value).toBe('asc');
    });

    test('renders sort and order dropdowns with initial values', () => {
        const sort ='modified';
        const order ='desc';

        render(
            <MemoryRouter initialEntries={[`/?sort=modified&order=desc`]}>
                <CharactersPage />
            </MemoryRouter>
        );

        const sortDropdown = screen.getByTestId('sort');
        expect(sortDropdown).toHaveValue(sort);

        const orderDropdown = screen.getByTestId('order');
        expect(orderDropdown).toHaveValue(order);
    });

    test('renders character names', () => {
        render(<CharactersPage />, { wrapper: BrowserRouter });
        
        characters.forEach(character => {
            const characterElement = screen.getByText((_, element) => {
                return element.tagName.toLowerCase() === 'a' && element.textContent.includes(character.name);
            });
            expect(characterElement).toBeInTheDocument();
        });
    });

    test('renders characters list', () => {
        render(<CharactersPage />, { wrapper: BrowserRouter });
        
        const charactersList = screen.getByRole('list');
        expect(charactersList).toBeInTheDocument();
    });

    test('renders number of characters', () => {
        render(<CharactersPage />, { wrapper: BrowserRouter });
        
        const numberOfCharacters = screen.getByText(/There are \d+ characters/i);
        expect(numberOfCharacters).toBeInTheDocument();
        expect(numberOfCharacters).toHaveTextContent(`There are ${characters.length} characters`);
    });

    test('changes sort and order', () => {
        render(
            <MemoryRouter>
                <CharactersPage />
            </MemoryRouter>
        );

        const sortDropdown = screen.getByTestId('sort');
        const orderDropdown = screen.getByTestId('order');

        fireEvent.change(sortDropdown, { target: { value: 'modified' } });
        expect(sortDropdown).toHaveValue('modified');

        fireEvent.change(orderDropdown, { target: { value: 'desc' } });
        expect(orderDropdown).toHaveValue('desc');
    });

    test('sets document title', () => {
        render(
            <MemoryRouter>
                <CharactersPage />
            </MemoryRouter>
        );

        expect(document.title).toBe('Marvel App');
    });

});