import { NameSpace } from '../../const';
import { Store } from '../../types/state';

export const getGenre = (state: Store): string =>
  state[NameSpace.Genre].genre;
