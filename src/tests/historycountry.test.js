import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import HistoryCountry from '../components/historycountry';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));
jest.mock('react-router-dom', () => ({
  useParams: jest.fn(),
}));

describe('HistoryCountry Component', () => {
  test('renders select and phrase', () => {
    useDispatch.mockReturnValue(jest.fn());
    useParams.mockReturnValue({ country: 'exampleCountry' });
    useSelector.mockReturnValue({
      isLoadingHistory: false,
      color: 'Red',
    });

    render(<HistoryCountry />);

    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toBeInTheDocument();

    const phraseElement = screen.getByText('Hi, how are you?');
    expect(phraseElement).toBeInTheDocument();
  });
});
