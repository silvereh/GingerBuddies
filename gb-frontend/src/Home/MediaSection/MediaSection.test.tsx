import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MediaSection from './MediaSection';

describe('<MediaSection />', () => {
  test('it should mount', () => {
    render(<MediaSection />);
    
    const mediaSection = screen.getByTestId('MediaSection');

    expect(mediaSection).toBeInTheDocument();
  });
});