// FILE: src/components/RadarChart.test.jsx

import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import RadarChartComponent from './RadarChart';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from 'recharts';

const mockCharacters = {
    character1: {
        name: 'Character 1',
        capacities: {
            strength: 8,
            speed: 7,
            intelligence: 9,
        },
    },
    character2: {
        name: 'Character 2',
        capacities: {
            strength: 6,
            speed: 8,
            intelligence: 7,
        },
    },
};

const mockOption1 = { value: 'character1' };
const mockOption2 = { value: 'character2' };

describe('RadarChartComponent', () => {
    test('renders correctly', () => {
        render(<RadarChartComponent characters={mockCharacters} option1={mockOption1} option2={mockOption2} />);
        expect(screen.getByText(/character 1/i)).toBeInTheDocument();
        expect(screen.getByText(/character 2/i)).toBeInTheDocument();
    });

    test('renders PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, and Legend', () => {
        render(<RadarChartComponent characters={mockCharacters} option1={mockOption1} option2={mockOption2} />);
        expect(screen.getByText(/character 1/i)).toBeInTheDocument();
        expect(screen.getByText(/character 2/i)).toBeInTheDocument();
        expect(document.querySelector('.recharts-polar-grid')).toBeInTheDocument();
        expect(document.querySelector('.recharts-polar-angle-axis')).toBeInTheDocument();
        expect(document.querySelector('.recharts-polar-radius-axis')).toBeInTheDocument();
        expect(document.querySelector('.recharts-legend-wrapper')).toBeInTheDocument();
    });

});