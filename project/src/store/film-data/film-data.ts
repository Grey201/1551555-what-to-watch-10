import { createSlice } from '@reduxjs/toolkit';
import { FilmData } from '../../types/state';
import {
  fetchCommentsAction,
  fetchFilmsAction,
  fetchSimilarFilms,
} from '../api-actions';
import { NameSpace } from '../../const';

const initialState: FilmData = {
  films: [],
  isDataLoading: false,
  comments: [],
  similarFilms: [],
};

export const filmData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFilmsAction.pending, (state) => {
        state.isDataLoading = true;
      })
      .addCase(fetchFilmsAction.fulfilled, (state, action) => {
        state.films = action.payload;
        state.isDataLoading = false;
      })
      .addCase(fetchSimilarFilms.fulfilled, (state, action) => {
        state.similarFilms = action.payload;
      })
      .addCase(fetchCommentsAction.fulfilled, (state, action) => {
        state.comments = action.payload;
      });
  },
});
