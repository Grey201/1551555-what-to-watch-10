import { activeGenre, loadFilms, setError, setDataLoadedStatus } from './action';
import { createReducer } from '@reduxjs/toolkit';
// import { films } from '../mocks/films';
import { Film } from '../types/types';


type InitialState = {
  // films:Films,
  films: Film [];
  genre: string;
  error: string | null;
  isDataLoaded: boolean;
};

const initialState: InitialState = {
  // films: films,
  films: [],
  genre: 'All genres',
  error: null,
  isDataLoaded: true,
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
      state.isDataLoaded = action.payload;
    });
});
