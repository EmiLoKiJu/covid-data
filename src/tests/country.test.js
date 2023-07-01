import React from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Country from '../components/country';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Country', () => {
  test('renders a loading message when isLoadingCases is true', () => {
    const store = mockStore({
      cases: {
        isLoadingCases: true,
        color: 'White',
      },
    });

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/country/USA']}>
          <Routes>
            <Route path="/country/:country" element={<Country />} />
          </Routes>
        </MemoryRouter>
      </Provider>,
    );
    expect(screen.getByText(/Loading Data.../i)).toBeInTheDocument();
  });

  test('renders the DataCountry component when isLoadingCases is false', () => {
    const store = mockStore({
      cases: {
        casesObj: {
          cases: 500,
          recovered: 500,
          deaths: 500,
        },
        isLoadingCases: false,
        color: 'White',
      },
    });

    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={['/country/USA']}>
          <Routes>
            <Route path="/country/:country" element={<Country />} />
          </Routes>
        </MemoryRouter>
      </Provider>,
    );
    expect(screen.getByTestId('datacont')).toBeInTheDocument();
  });
});
