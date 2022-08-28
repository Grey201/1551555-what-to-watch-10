import { createSlice } from '@reduxjs/toolkit';
import { FilmData } from '../../types/state';
import { fetchFilmsAction } from '../api-actions';
import { NameSpace } from '../../const';

const initialState: FilmData = {
  films: [],
  isDataLoading: false,
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
      });
  },
});
