// FILE: src/pages/CharacterDetailPage.test.jsx

import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import CharacterDetailPage from './CharacterDetailPage';
import CharacterDetail from '../components/CharacterDetail';
import { useLoaderData } from 'react-router';

// Mock the useLoaderData hook
jest.mock('react-router', () => ({
    useLoaderData: jest.fn(),
}));

// Mock the CharacterDetail component
jest.mock('../components/CharacterDetail', () => () => <div>CharacterDetail Component</div>);

describe('CharacterDetailPage Component', () => {

    test('renders CharacterDetail component when character data is loaded', () => {
        const character = { id: 1, name: 'Character Name' };
        useLoaderData.mockReturnValue(character);
        render(<CharacterDetailPage />);
        expect(screen.getByText('CharacterDetail Component')).toBeInTheDocument();
    });
    describe('CharacterDetailPage Component', () => {

        test('renders "loading..." when character data is not loaded', () => {
            useLoaderData.mockReturnValue(null);
            render(<CharacterDetailPage />);
            expect(screen.getByText('loading...')).toBeInTheDocument();
        });

        test('renders CharacterDetail component when character data is loaded', () => {
            const character = { id: 1, name: 'Character Name', capacities: [] };
            useLoaderData.mockReturnValue(character);
            render(<CharacterDetailPage />);
            expect(screen.getByText('CharacterDetail Component')).toBeInTheDocument();
        });

        test('renders D3PieChart and RechartsPieChart components when character data is loaded', () => {
            const character = { id: 1, name: 'Character Name', capacities: [] };
            useLoaderData.mockReturnValue(character);
            render(<CharacterDetailPage />);
            expect(screen.getByText('Using D3')).toBeInTheDocument();
            expect(screen.getByText('Using Recharts')).toBeInTheDocument();
        });

    });
});