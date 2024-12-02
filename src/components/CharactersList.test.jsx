// FILE: src/components/CharactersList.test.jsx

import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { CharactersList } from './CharactersList';
import { da } from 'date-fns/locale';

describe('CharactersList Component', () => {

  test('renders correctly with non-empty characters array', () => {
    const characters = [
      { id: 1, name: 'Character One' },
      { id: 2, name: 'Character Two' },
    ];
    render(
      <Router>
        <CharactersList characters={characters} />
      </Router>
    );

    expect(screen.getByText((content, element) => content.startsWith('Character One'))).toBeInTheDocument();    
    expect(screen.getByText((content, element) => content.startsWith('Character Two'))).toBeInTheDocument();
  });

  test('generates correct links for each character', () => {
    const characters = [
      { id: 1, name: 'Character One', date: "2021-09-01T00:00:00Z" },
      { id: 2, name: 'Character Two', date: "2021-09-02T00:00:00Z" },
    ];
    const { getByText } = render(
      <Router>
        <CharactersList characters={characters} />
      </Router>
    );

    expect(getByText((content, element) => content.includes('Character One')).closest('a')).toHaveAttribute('href', '/characters/1');
    expect(getByText((content, element) => content.includes('Character Two')).closest('a')).toHaveAttribute('href', '/characters/2');
  });
});