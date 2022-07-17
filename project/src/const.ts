export enum AppRoute {
  'Sign In' = '/login',
  MyList = '/lose',
  Film = '/films/:id',
  Main = '/',
  'Add Review' = '/films/:id/review',
  Player = '/player/:id',
  Error = '*',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}
/* Main /
  Sign In /login
  MyList /mylist
  Film /films/:id
  Add Review /films/:id/review
  Player /player/:id
   */
