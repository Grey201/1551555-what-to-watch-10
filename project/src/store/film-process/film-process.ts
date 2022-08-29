import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NameSpace, DEFAULT_GENRE } from '../../const';
import { FilmProcess } from '../../types/state';

const initialState: FilmProcess = {
  genre: DEFAULT_GENRE,
};

export const filmProcess = createSlice({
  name: NameSpace.Genre,
  initialState,
  reducers: {
    activeGenre: (state, action: PayloadAction<string>) => {
      state.genre = action.payload;
    },
  },
});

export const { activeGenre } = filmProcess.actions;
