import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, Store} from '../types/state';
import { AxiosInstance } from 'axios';
import { loadFilms,setDataLoadedStatus } from './action';
import { Film } from '../types/types';
import { APIRoute } from '../const';

export const fetshFilmsAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatsh: AppDispatch;
    state: Store;
    extra: AxiosInstance;
  }
>('data/fetchFilms', async (_arg, { dispatch, extra: api }) => {
  dispatch(setDataLoadedStatus(true));
  const {data} = await api.get<Film>(APIRoute.Films);
  dispatch(loadFilms(data));
  dispatch(setDataLoadedStatus(false));
});
