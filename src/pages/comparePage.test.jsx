// FILE: src/pages/comparePage.test.jsx

import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CompareCharactersPage from './comparePage';
import { useLoaderData } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
    useLoaderData: jest.fn(),
}));

const mockCharacters = [
    {
        name: 'Character 1',
        capacities: {
            strength: 8,
            speed: 7,
            intelligence: 9,
        },
    },
    {
        name: 'Character 2',
        capacities: {
            strength: 6,
            speed: 8,
            intelligence: 7,
        },
    },
];

describe('CompareCharactersPage Component', () => {
    beforeEach(() => {
        useLoaderData.mockReturnValue(mockCharacters);
    });

    test('renders correctly', () => {
        render(<CompareCharactersPage />);
        expect(screen.getByText('Compare characters')).toBeInTheDocument();
        expect(screen.getByTestId('select-character-1')).toBeInTheDocument();
        expect(screen.getByTestId('select-character-2')).toBeInTheDocument();
    });

    test('sets document title correctly', () => {
        render(<CompareCharactersPage />);
        expect(document.title).toBe('Compare | Marvel App');
    });

    test('renders RadarChartComponent with correct props', () => {
        render(<CompareCharactersPage />);
        const radarChartComponents = screen.getAllByText('Character 1');
        expect(radarChartComponents[0]).toBeInTheDocument();
    });

    test('select elements change state correctly', () => {
        render(<CompareCharactersPage />);
        const select1 = screen.getByTestId('select-character-1');
        const select2 = screen.getByTestId('select-character-2');

        fireEvent.change(select1, { target: { value: '1' } });
        fireEvent.change(select2, { target: { value: '0' } });

        expect(select1.value).toBe('1');
        expect(select2.value).toBe('0');
    });
});