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
  Comments='/comments',
}

export const DEFAULT_GENRE = 'All genres';

export enum NameSpace {
  Data = 'DATA',
  Genre = 'GENRE',
  User = 'USER',
}

export enum Tab {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews',
}
