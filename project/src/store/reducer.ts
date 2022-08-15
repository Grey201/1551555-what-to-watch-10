import { activeGenre } from './action';
import { createReducer } from '@reduxjs/toolkit';
import { films } from '../mocks/films';

const initialState = {
  films: films,
  genre: 'All genres'
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(activeGenre, (state, action) => {
      state.genre = action.payload;
    });
});
