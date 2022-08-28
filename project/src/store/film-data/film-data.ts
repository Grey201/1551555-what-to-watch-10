import { createSlice } from '@reduxjs/toolkit';
import { FilmData } from '../../types/state';
import { fetchCommentsAction, fetchFilmsAction } from '../api-actions';
import { NameSpace } from '../../const';

const initialState: FilmData = {
  films: [],
  isDataLoading: false,
  comments: [],
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
      .addCase(fetchCommentsAction.fulfilled, (state, action) => {
        state.comments = action.payload;
      });
  },
});
