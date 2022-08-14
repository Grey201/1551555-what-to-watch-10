import { createAction } from '@reduxjs/toolkit';

export const activeFilter = createAction('activeFilter', (genre) => ({
  payload: genre,
}));
