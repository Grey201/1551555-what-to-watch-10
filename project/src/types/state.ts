import { store } from '../store/index';
import { AuthorizationStatus } from '../const';
import { Film } from './types';

export type Store = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
};
export type FilmData = {
  films: Film[];
  isDataLoading: boolean;
};

export type FilmProcess = {
  genre: string;
};
