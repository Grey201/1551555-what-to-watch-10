import { activeGenre, loadFilms, setError, setDataLoadedStatus } from './action';
import { createReducer } from '@reduxjs/toolkit';
import { Film } from '../types/types';


type InitialState = {
  films: Film [];
  genre: string;
  error: string | null;
  isDataLoading: boolean;
};

const initialState: InitialState = {
  films: [],
  genre: 'All genres',
  error: null,
  isDataLoading: false,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(activeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoading = action.payload;
    });
});
