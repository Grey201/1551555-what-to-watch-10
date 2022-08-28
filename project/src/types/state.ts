import { store } from '../store/index';
import { AuthorizationStatus } from '../const';
import { Film, Comment } from './types';

export type Store = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
};
export type FilmData = {
  films: Film[];
  isDataLoading: boolean;
  comments: Comment[];
};

export type FilmProcess = {
  genre: string ;
};
