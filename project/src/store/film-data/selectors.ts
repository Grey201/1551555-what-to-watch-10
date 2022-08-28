import { NameSpace } from '../../const';
import { Store } from '../../types/state';
import { Film } from '../../types/types';
import { DEFAULT_GENRE } from '../../const';
import { createSelector } from 'reselect';
import { getGenre } from '../film-process/selectors';

export const getFilms = (state: Store): Film[] => state[NameSpace.Data].films;
export const getLoadedDataStatus = (state: Store): boolean =>
  state[NameSpace.Data].isDataLoading;
export const selectorFilms = createSelector(
  [getFilms, getGenre],
  (films, genre) =>
    genre === DEFAULT_GENRE
      ? films
      : films.filter((film) => film.genre === genre)
);
