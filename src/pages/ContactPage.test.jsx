// FILE: src/pages/ContactPage.test.jsx

import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import ContactPage from './ContactPage';

describe('ContactPage Component', () => {

  test('renders correctly', () => {
    render(<ContactPage />);
    expect(screen.getByText('Contact Us')).toBeInTheDocument();
    expect(screen.getByText('Feel free to contact us at')).toBeInTheDocument();
    expect(screen.getByText('mailto:marvelApp@gmail.com')).toBeInTheDocument();
  });

  test('sets document title correctly', () => {
    render(<ContactPage />);
    expect(document.title).toBe('Contact | Marvel Characters');
  });

  test('renders contact email link correctly', () => {
    render(<ContactPage />);
    const link = screen.getByText('mailto:marvelApp@gmail.com').closest('a');
    expect(link).toHaveAttribute('href', 'mailto:marvelApp@gmail.com');
  });

});