import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, Store } from '../types/state';
import { AxiosInstance } from 'axios';
import { loadFilms, setDataLoadedStatus} from './action';
import { Film } from '../types/types';
import { APIRoute} from '../const';
import { saveToken, dropToken } from '../services/token';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';

export const fetchFilmsAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatsh: AppDispatch;
    state: Store;
    extra: AxiosInstance;
  }
>('data/fetchFilms', async (_arg, { dispatch, extra: api }) => {
  dispatch(setDataLoadedStatus(true));
  const { data } = await api.get<Film>(APIRoute.Films);
  dispatch(loadFilms(data));
  dispatch(setDataLoadedStatus(false));
});

export const checkAuthAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: Store;
    extra: AxiosInstance;
  }
>('user/checkAuth', async (_arg, { dispatch, extra: api }) => {
  await api.get(APIRoute.Login);
});

export const loginAction = createAsyncThunk<
  void,
  AuthData,
  {
    dispatch: AppDispatch;
    state: Store;
    extra: AxiosInstance;
  }
>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const {
      data: { token },
    } = await api.post<UserData>(APIRoute.Login, { email, password });
    saveToken(token);
  }
);

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: Store;
    extra: AxiosInstance;
  }
>('user/logout', async (_arg, { dispatch, extra: api }) => {
  await api.delete(APIRoute.Logout);
  dropToken();
});
