// FILE: src/pages/AboutPage.test.jsx

import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutPage from './AboutPage';

describe('AboutPage Component', () => {

  test('renders correctly', () => {
    render(<AboutPage />);
    expect(screen.getByText('About Us')).toBeInTheDocument();
    expect(screen.getByText('We are a team of Marvel fans who love to create awesome apps !')).toBeInTheDocument();
  });

  test('sets document title correctly', () => {
    render(<AboutPage />);
    expect(document.title).toBe('About Us | Marvel Characters');
  });

});