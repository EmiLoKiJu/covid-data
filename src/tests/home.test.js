import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from '../components/home';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('Home Component', () => {
  beforeEach(() => {
    useSelector.mockReturnValue({
      color: 'red',
    });
  });

  test('renders home component with correct content', () => {
    render(
      <Router>
        <Home />
      </Router>,
    );

    const title = screen.getByText('Covid stats');
    expect(title).toBeInTheDocument();

    const creditsLink = screen.getByRole('link', { name: 'See Credits' });
    expect(creditsLink).toBeInTheDocument();

    const menuImages = screen.getAllByRole('img');
    expect(menuImages).toHaveLength(4);
  });
});
