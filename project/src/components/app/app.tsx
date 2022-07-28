import MainScreen from '../../pages/main-screen/main-screen';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { Films } from '../../types/types';
import MyList from '../../pages/my-list/my-list';
import Error404 from '../../pages/error-404/error-404';
import Player from '../../pages/player/player';
import MoviePage from '../../pages/movie-page/movie-page';
import AddReview from '../../pages/add-review/add-review';
import SingIn from '../../pages/sign-in/sign-in';
import PrivateRoute from '../privat-route/privat-route';

function App({ promoFilm }: { promoFilm: Films[] }): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainScreen films={promoFilm} />}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <MyList films={promoFilm} />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Player} element={<Player films={promoFilm} />} />
        <Route path={AppRoute.Film} element={<MoviePage />} />
        <Route path={AppRoute.AddReview} element={<AddReview films={promoFilm}/>} />
        <Route path={AppRoute.SignIn} element={<SingIn />} />
        <Route path={AppRoute.Error} element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
