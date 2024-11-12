// FILE: src/components/CharacterDetail.test.jsx

import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import CharacterDetail from './CharacterDetail';

describe('CharacterDetail Component', () => {

    test('renders correctly with an empty character object', () => {
        render(<CharacterDetail character={{}} />);
        expect(screen.getByText('Date de modification :')).toBeInTheDocument();
    });

    test('renders character details correctly', () => {
        const character = {
            name: 'Character Name',
            description: 'Character Description',
            modified: '2023-01-01',
        };
        render(<CharacterDetail character={character} />);
        expect(screen.getByText('Character Name')).toBeInTheDocument();
        expect(screen.getByText('Character Description')).toBeInTheDocument();
        expect(screen.getByText('Date de modification : 2023-01-01')).toBeInTheDocument();
    });

    test('renders image correctly when thumbnail is provided', () => {
        const character = {
            name: 'Character Name',
            thumbnail: {
                path: 'http://example.com/image',
                extension: 'jpg',
            },
        };
        render(<CharacterDetail character={character} />);
        const img = screen.getByAltText('Character Name');
        expect(img).toHaveAttribute('src', 'http://example.com/image/standard_large.jpg');
    });

});