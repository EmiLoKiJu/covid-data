import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import {
  setColor, getCases, getHistoricallData,
} from '../redux/cases/casesSlice';

jest.mock('axios', () => ({
  __esModule: true,
  default: jest.fn(),
}));

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Redux actions', () => {
  let store;

  beforeEach(() => {
    store = mockStore({});
  });

  afterEach(() => {
    store.clearActions();
    jest.restoreAllMocks();
  });

  describe('getCases', () => {
    it('dispatches the correct actions on successful API call', async () => {
      const mockResponse = {
        country: 'Country',
        population: 1000000,
        cases: 1000,
        todayCases: 100,
        deaths: 100,
        todayDeaths: 10,
        recovered: 900,
        todayRecovered: 50,
        active: 100,
        critical: 20,
        casesPerOneMillion: 1000,
        recoveredPerOneMillion: 900,
        deathsPerOneMillion: 100,
      };

      axios.mockResolvedValueOnce({ data: mockResponse });

      const expectedActions = [
        {
          type: 'cases/getCases/pending',
          payload: undefined,
          meta: {
            arg: 'inputcountry',
            requestId: expect.any(String),
            requestStatus: 'pending',
          },
        },
        {
          type: 'cases/getCases/fulfilled',
          payload: mockResponse,
          meta: {
            arg: 'inputcountry',
            requestId: expect.any(String),
            requestStatus: 'fulfilled',
          },
        },
      ];

      await store.dispatch(getCases('inputcountry'));

      expect(store.getActions()).toEqual(expectedActions);
    });

    it('dispatches the correct actions on API call failure', async () => {
      const mockError = new Error('API error');

      axios.mockRejectedValueOnce(mockError);

      const expectedActions = [
        {
          type: 'cases/getCases/pending',
          payload: undefined,
          meta: {
            arg: 'inputcountry',
            requestId: expect.any(String),
            requestStatus: 'pending',
          },
        },
        {
          type: 'cases/getCases/rejected',
          payload: undefined,
          meta: {
            arg: 'inputcountry',
            requestId: expect.any(String),
            rejectedWithValue: false,
            requestStatus: 'rejected',
            aborted: false,
            condition: false,
          },
          error: {
            name: 'Error',
            message: 'API error',
            stack: expect.any(String),
          },
        },
      ];
      await store.dispatch(getCases('inputcountry'));

      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe('getHistoricallData', () => {
    it('dispatches the correct actions on successful API call', async () => {
      const mockResponse = { historicalData: 'Some data' };

      axios.mockResolvedValueOnce({ data: mockResponse });

      const expectedActions = [
        {
          type: 'historicallData/getHistoricallData/pending',
          payload: undefined,
          meta: {
            arg: {
              inputcountry: 'country',
              lastdays: 7,
            },
            requestId: expect.any(String),
            requestStatus: 'pending',
          },
        },
        {
          type: 'historicallData/getHistoricallData/fulfilled',
          payload: { historicalData: 'Some data' },
          meta: {
            arg: {
              inputcountry: 'country',
              lastdays: 7,
            },
            requestId: expect.any(String),
            requestStatus: 'fulfilled',
          },
        },
      ];

      await store.dispatch(getHistoricallData({ inputcountry: 'country', lastdays: 7 }));
      expect(store.getActions()).toEqual(expectedActions);
    });

    it('dispatches the correct actions on API call failure', async () => {
      const mockError = new Error('API error');

      axios.mockRejectedValueOnce(mockError);

      const expectedActions = [
        {
          type: 'historicallData/getHistoricallData/pending',
          payload: undefined,
          meta: {
            arg: {
              inputcountry: 'country',
              lastdays: 7,
            },
            requestId: expect.any(String),
            requestStatus: 'pending',
          },
        },
        {
          type: 'historicallData/getHistoricallData/rejected',
          payload: undefined,
          meta: {
            arg: {
              inputcountry: 'country',
              lastdays: 7,
            },
            requestId: expect.any(String),
            rejectedWithValue: false,
            requestStatus: 'rejected',
            aborted: false,
            condition: false,
          },
          error: {
            name: 'Error',
            message: 'API error',
            stack: expect.any(String),
          },
        },
      ];

      await store.dispatch(getHistoricallData({ inputcountry: 'country', lastdays: 7 }));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe('setColor', () => {
    it('dispatches the correct action', () => {
      const color = 'Red';
      const expectedAction = { type: 'cases/setColor', payload: color };

      store.dispatch(setColor(color));
      expect(store.getActions()).toEqual([expectedAction]);
    });
  });
});
