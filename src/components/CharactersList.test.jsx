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

    expect(getByText('Character One').closest('a')).toHaveAttribute('href', '/characters/1');
    expect(getByText('Character Two').closest('a')).toHaveAttribute('href', '/characters/2');
  });

  test('renders correctly with empty characters array', () => {
    const characters = [];
    render(
      <Router>
        <CharactersList characters={characters} />
      </Router>
    );

    expect(screen.getByText('No characters available')).toBeInTheDocument();
  });

  test('renders character names in the correct order', () => {
    const characters = [
      { id: 1, name: 'Character One' },
      { id: 2, name: 'Character Two' },
      { id: 3, name: 'Character Three' },
    ];
    render(
      <Router>
        <CharactersList characters={characters} />
      </Router>
    );

    const characterNames = screen.getAllByRole('link').map(link => link.textContent);
    expect(characterNames).toEqual(['Character One - N/A', 'Character Two - N/A', 'Character Three - N/A']);
  });

  test('renders character names with special characters', () => {
    const characters = [
      { id: 1, name: 'Character One!' },
      { id: 2, name: 'Character Two@' },
    ];
    render(
      <Router>
        <CharactersList characters={characters} />
      </Router>
    );

    expect(screen.getByText('Character One!')).toBeInTheDocument();
    expect(screen.getByText('Character Two@')).toBeInTheDocument();
  });

  test('renders character names with long names', () => {
    const characters = [
      { id: 1, name: 'Character One with a very long name that exceeds normal length' },
      { id: 2, name: 'Character Two with another very long name that exceeds normal length' },
    ];
    render(
      <Router>
        <CharactersList characters={characters} />
      </Router>
    );

    expect(screen.getByText('Character One with a very long name that exceeds normal length')).toBeInTheDocument();
    expect(screen.getByText('Character Two with another very long name that exceeds normal length')).toBeInTheDocument();
  });
});