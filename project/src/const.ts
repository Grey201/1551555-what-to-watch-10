export enum AppRoute {
  SignIn = '/login',
  MyList = '/lose',
  Film = '/films/:id',
  Main = '/',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
  Error = '*',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Films = '/films',
  Login = '/login',
  Logout = '/logout',
}

export const DEFAULT_GENRE = 'All genres';
export const TIMEOUT_SHOW_ERROR = 5000;
