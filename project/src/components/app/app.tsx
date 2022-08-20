import MainScreen from '../../pages/main-screen/main-screen';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import MyList from '../../pages/my-list/my-list';
import Error404 from '../../pages/error-404/error-404';
import Player from '../../pages/player/player';
import MoviePage from '../../pages/movie-page/movie-page';
import AddReview from '../../pages/add-review/add-review';
import SingIn from '../../pages/sign-in/sign-in';
import PrivateRoute from '../privat-route/privat-route';
import { useAppSelector } from '../../store';
import LoadingScreen from '../../pages/loading-screen/loading-screen';


export default function App(): JSX.Element {
  const {authorizationStatus, isDataLoading } = useAppSelector((state) => state);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={isDataLoading ? <LoadingScreen /> : <MainScreen />}
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <MyList />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Player} element={<Player />} />
        <Route path={AppRoute.Film} element={<MoviePage />} />
        <Route path={AppRoute.AddReview} element={<AddReview />} />
        <Route path={AppRoute.SignIn} element={<SingIn />} />
        <Route path={AppRoute.Error} element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}
