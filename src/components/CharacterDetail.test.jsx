import '@testing-library/jest-dom';import '@testing-library/jest-dom';import React from 'react';import { render, screen } from '@testing-library/react';import CharacterDetail from './CharacterDetail';describe('CharacterDetail Component', () => {    test('renders correctly with an empty character object', () => {        render(<CharacterDetail character={{}} />);        expect(screen.getByText('Date de modification :')).toBeInTheDocument();    });    test('renders image correctly when thumbnail is provided', () => {        const character = {            name: 'Character Name',            thumbnail: {                path: 'http://example.com/image',                extension: 'jpg',            },        };        render(<CharacterDetail character={character} />);        const img = screen.getByAltText('Character Name');        expect(img).toHaveAttribute('src', 'http://example.com/image/standard_large.jpg');    });    test('renders character name correctly', () => {
        const character = {
            name: 'Character Name',
        };
        render(<CharacterDetail character={character} />);
        expect(screen.getByText('Character Name')).toBeInTheDocument();
    });

    test('renders character description correctly', () => {
        const character = {
            description: 'Character Description',
        };
        render(<CharacterDetail character={character} />);
        expect(screen.getByText('Character Description')).toBeInTheDocument();
    });

    test('renders formatted date correctly when modified date is provided', () => {
        const character = {
            modified: '2023-10-01T00:00:00Z',
        };
        render(<CharacterDetail character={character} />);
        expect(screen.getByText('Oct 01, 2023')).toBeInTheDocument();
    });

    test('renders "N/A" when modified date is not provided', () => {
        render(<CharacterDetail character={{}} />);
        expect(screen.getByText('N/A')).toBeInTheDocument();
    });

});