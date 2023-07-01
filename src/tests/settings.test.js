import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useDispatch, useSelector } from 'react-redux';
import Settings from '../components/settings';
import { setColor } from '../redux/cases/casesSlice';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

describe('Settings Component', () => {
  beforeEach(() => {
    useDispatch.mockReturnValue(jest.fn());
    useSelector.mockReturnValue({
      color: 'red',
    });
  });

  test('renders settings component with correct content', () => {
    render(<Settings />);

    const colorButtons = screen.getAllByRole('button');
    expect(colorButtons).toHaveLength(6);
    expect(colorButtons[0]).toHaveTextContent('Red');
  });

  test('dispatches setColor action when clicking color buttons', () => {
    const dispatchMock = jest.fn();
    useDispatch.mockReturnValue(dispatchMock);

    render(<Settings />);

    const colorButtons = screen.getAllByRole('button');
    fireEvent.click(colorButtons[1]);

    expect(dispatchMock).toHaveBeenCalledWith(setColor('Blue'));
  });
});
