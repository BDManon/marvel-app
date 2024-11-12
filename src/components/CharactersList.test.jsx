// FILE: src/components/CharactersList.test.jsx

import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { CharactersList } from './CharactersList';

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

    expect(screen.getByText('Character One')).toBeInTheDocument();    
    expect(screen.getByText('Character Two')).toBeInTheDocument();
  });

  test('generates correct links for each character', () => {
    const characters = [
      { id: 1, name: 'Character One' },
      { id: 2, name: 'Character Two' },
    ];
    const { getByText } = render(
      <Router>
        <CharactersList characters={characters} />
      </Router>
    );

    expect(getByText('Character One').closest('a')).toHaveAttribute('href', '/characters/1');
    expect(getByText('Character Two').closest('a')).toHaveAttribute('href', '/characters/2');
  });
});