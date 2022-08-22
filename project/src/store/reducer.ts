import {
  activeGenre,
  loadFilms,
  requireAuthorization,
  setDataLoadedStatus,
} from './action';
import { createReducer } from '@reduxjs/toolkit';
import { Film } from '../types/types';
import { AuthorizationStatus } from '../const';
import { DEFAULT_GENRE } from '../const';

type InitialState = {
  films: Film[];
  genre: string;
  isDataLoading: boolean;
  authorizationStatus: AuthorizationStatus;
};

const initialState: InitialState = {
  films: [],
  genre: DEFAULT_GENRE,
  isDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(activeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoading = action.payload;
    });
});
