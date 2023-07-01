import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import configureStore from 'redux-mock-store';
import CreditsForThis from '../components/credits';

const mockStore = configureStore([]);

describe('CreditsForThis', () => {
  test('renders a div with classname "credits" and 3 links', () => {
    const store = mockStore({
      cases: {
        color: 'White',
      },
    });

    render(
      <Provider store={store}>
        <CreditsForThis />
      </Provider>,
    );
    expect(screen.getByTestId('credits')).toHaveClass('credits');
    expect(screen.getAllByRole('link')).toHaveLength(3);
  });
});
