import { createAction } from '@reduxjs/toolkit';

export const activeGenre = createAction('activeGenre', (genre) => ({
  payload: genre,
}));
