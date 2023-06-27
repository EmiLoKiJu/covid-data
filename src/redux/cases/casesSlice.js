/* eslint-disable camelcase */

import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit';
import axios from 'axios';

export const setColor = createAction('cases/setColor');

export const getCases = createAsyncThunk('cases/getCases', async (inputcountry) => {
  try {
    const response = await axios(`https://disease.sh/v3/covid-19/countries/${inputcountry}?strict=true`);
    const coviddatabrute = await response.data;
    const {
      country,
      population,
      cases,
      todayCases,
      deaths,
      todayDeaths,
      recovered,
      todayRecovered,
      active,
      critical,
      casesPerOneMillion,
      recoveredPerOneMillion,
      deathsPerOneMillion,
    } = coviddatabrute;
    const coviddata = {
      country,
      population,
      cases,
      recovered,
      deaths,
      todayCases,
      todayRecovered,
      todayDeaths,
      active,
      critical,
      casesPerOneMillion,
      recoveredPerOneMillion,
      deathsPerOneMillion,
    };
    return coviddata;
  } catch (error) {
    return error;
  }
});

const casesSlice = createSlice({
  name: 'cases',
  initialState: { casesObj: [], isLoading: true, color: 'Pink' },
  extraReducers: (builder) => {
    builder
      .addCase(getCases.pending, (state) => ({ ...state, isLoading: true }))
      .addCase(getCases.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        casesObj: action.payload,
      }))
      .addCase(getCases.rejected, (state) => ({ ...state, isLoading: false }))
      .addCase(setColor, (state, action) => {
        state.color = action.payload;
      });
  },
});

export default casesSlice.reducer;
