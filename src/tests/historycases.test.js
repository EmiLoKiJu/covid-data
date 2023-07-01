import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HistoryCases from '../components/historycases';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ country: 'test' }),
}));

describe('HistoryCases Component', () => {
  test('search bar filters countries', () => {
    useSelector.mockReturnValue({
      color: 'Red',
    });

    render(
      <Router>
        <HistoryCases />
      </Router>,
    );

    const searchBar = screen.getByPlaceholderText('Search by country');
    fireEvent.change(searchBar, { target: { value: 'unit' } });

    const filteredCountry1 = screen.queryByText('United States');
    expect(filteredCountry1).toBeInTheDocument();

    const filteredCountry2 = screen.queryByText('United Kingdom');
    expect(filteredCountry2).toBeInTheDocument();

    const unfilteredCountry = screen.queryByText('Argentina');
    expect(unfilteredCountry).not.toBeInTheDocument();
  });
});
