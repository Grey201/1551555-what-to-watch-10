import { createAction } from '@reduxjs/toolkit';

export const activeGenre = createAction('activeGenre', (genre) => ({
  payload: genre,
}));
export const loadFilms = createAction('loadFilms', (films) => ({
  payload: films,
}));
export const setError = createAction('setError', (error) => ({
  payload: error,
}));
export const setDataLoadedStatus = createAction(
  'setDataLoadedStatus',
  (isDataLoaded) => ({
    payload: isDataLoaded,
  })
);
