import { NameSpace } from '../../const';
import { Store } from '../../types/state';
import { AuthorizationStatus } from '../../const';

export const getAuthorizationStatus = (state: Store): AuthorizationStatus =>
  state[NameSpace.User].authorizationStatus;
