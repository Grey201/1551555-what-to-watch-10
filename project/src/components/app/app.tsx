import MainScreen from '../../pages/main-screen/main-screen';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { Film } from '../../types/types';
import MyList from '../../pages/my-list/my-list';
import Error404 from '../../pages/error-404/error-404';
import Player from '../../pages/player/player';
import MoviePage from '../../pages/movie-page/movie-page';
import MoviePageReviews from '../../pages/movie-page-reviews/movie-page-reviews';
import SingIn from '../../pages/sign-in/sign-in';
import PrivateRoute from '../privat-route/privat-route';

function App({ promoFilm }: { promoFilm: Film }): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainScreen film={promoFilm} />} />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <MyList />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Player} element={<Player />} />
        <Route path={AppRoute.Film} element={<MoviePage />} />
        <Route path={AppRoute['Add Review']} element={<MoviePageReviews />} />
        <Route path={AppRoute['Sign In']} element={<SingIn />} />
        <Route path={AppRoute.Error} element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
