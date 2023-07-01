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
    window.location.reload();
    throw error;
  }
});

export const getHistoricallData = createAsyncThunk('historicallData/getHistoricallData', async ({ inputcountry, lastdays }) => {
  try {
    const response = await axios(`https://disease.sh/v3/covid-19/historical/${inputcountry}?lastdays=${lastdays}`);
    const coviddatabrute = await response.data;
    return coviddatabrute;
  } catch (error) {
    window.location.reload();
    throw error;
  }
});

const casesSlice = createSlice({
  name: 'cases',
  initialState: {
    casesObj: [],
    historicallObj: [],
    isLoadingCases: true,
    isLoadingHistory: true,
    color: 'Black',
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCases.pending, (state) => ({ ...state, isLoadingCases: true }))
      .addCase(getCases.fulfilled, (state, action) => ({
        ...state,
        isLoadingCases: false,
        casesObj: action.payload,
      }))
      .addCase(getCases.rejected, (state) => ({
        ...state,
        isLoadingCases: true,
      }))
      .addCase(getHistoricallData.pending, (state) => ({
        ...state,
        isLoadingHistory: true,
      }))
      .addCase(getHistoricallData.fulfilled, (state, action) => ({
        ...state,
        isLoadingHistory: false,
        historicallObj: action.payload,
      }))
      .addCase(getHistoricallData.rejected, (state) => ({
        ...state,
        isLoadingHistory: true,
      }))
      .addCase(setColor, (state, action) => {
        state.color = action.payload;
      });
  },
});

export default casesSlice.reducer;
