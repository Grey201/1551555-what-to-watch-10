import Header from '../../components/header/header';
import { useNavigate, Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppDispatch } from '../../store';
import FilmList from '../../components/film-list/film-list';
import React from 'react';
import { Fragment } from 'react';
import { activeGenre } from '../../store/film-process/film-process';
import SortFilm from '../../components/sort/sort';
import { useAppSelector } from '../../store';
import { getFilms } from '../../store/film-data/selectors';

export default function MainScreen(): JSX.Element {
  const films = useAppSelector(getFilms);
  const [{ name, genre, released }] = films;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const genres = new Set(films.map((film) => film.genre));
  const GenresList = Array.from(genres).map((filmGenre) => (
    <SortFilm key={filmGenre} nameGenre={filmGenre} />
  ));

  return (
    <Fragment>
      <section className="film-card">
        <div className="film-card__bg">
          <img
            src="img/bg-the-grand-budapest-hotel.jpg"
            alt="The Grand Budapest Hotel"
          />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <Header />
        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img
                src="img/the-grand-budapest-hotel-poster.jpg"
                alt="The Grand Budapest Hotel poster"
                width="218"
                height="327"
              />
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{genre}</span>
                <span className="film-card__year">{released}</span>
              </p>

              <div className="film-card__buttons">
                <button
                  className="btn btn--play film-card__button"
                  type="button"
                  onClick={() => navigate(AppRoute.Player)}
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button
                  className="btn btn--list film-card__button"
                  type="button"
                  onClick={() => navigate(AppRoute.MyList)}
                >
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <ul className="catalog__genres-list">
            <li
              className="catalog__genres-item catalog__genres-item--active"
              onClick={(evt: React.MouseEvent<HTMLLIElement>) =>
                dispatch(activeGenre(evt.currentTarget.innerText))}
            >
              <Link to="#" className="catalog__genres-link">
                All genres
              </Link>
            </li>
            {GenresList}
          </ul>
          <FilmList />
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </Fragment>
  );
}
