import { configureStore } from '@reduxjs/toolkit';
import casesReducer from './cases/casesSlice';

const store = configureStore({
  reducer: {
    cases: casesReducer,
  },
});

export default store;
