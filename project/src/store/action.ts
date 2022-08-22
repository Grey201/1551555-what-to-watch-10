import { createAction } from '@reduxjs/toolkit';

export const activeGenre = createAction('activeGenre', (genre) => ({
  payload: genre,
}));
export const loadFilms = createAction('loadFilms', (films) => ({
  payload: films,
}));
export const setDataLoadedStatus = createAction(
  'setDataLoadedStatus',
  (isDataLoading) => ({
    payload: isDataLoading,
  })
);

