import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import DataCountry from '../components/datacountry';

const mockStore = configureStore([]);

describe('DataCountry component', () => {
  test('renders three Bar elements and one div with classname "credits"', () => {
    const store = mockStore({
      cases: {
        casesObj: {
          cases: 100,
          recovered: 50,
          deaths: 10,
          todayCases: 20,
          todayRecovered: 5,
          todayDeaths: 2,
          casesPerOneMillion: 1000,
          recoveredPerOneMillion: 500,
          deathsPerOneMillion: 100,
        },
        color: 'White',
      },
    });

    render(
      <Provider store={store}>
        <DataCountry phrase="Test Phrase" />
      </Provider>,
    );
    const barElements = screen.getAllByRole('img', { name: '' });
    expect(barElements.length).toBe(3);

    const creditsElement = screen.getByTestId('credits');
    expect(creditsElement).toBeInTheDocument();
  });
});
