import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useSelector } from 'react-redux';
import DataHistoryCountry from '../components/datahistorycountry';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('DataHistoryCountry Component', () => {
  test('renders Line component', () => {
    useSelector.mockReturnValue({
      historicallObj: {
        timeline: {
          cases: {
            '1/1/22': 100,
            '1/2/22': 200,
          },
          deaths: {
            '1/1/22': 10,
            '1/2/22': 20,
          },
        },
      },
      color: 'Red',
    });

    render(<DataHistoryCountry phrase="Hello" />);

    const lineElements = screen.getAllByRole('img', { name: '' });
    const lineElementWithClass = lineElements.find((element) => element.classList.contains('data'));
    expect(lineElementWithClass).toBeInTheDocument();
  });
});
