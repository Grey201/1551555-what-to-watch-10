import Header from '../../components/header/header';
import { useNavigate, Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import Tabs from '../../components/tabs/tabs';
import React from 'react';
import { useAppSelector } from '../../store';
import { getFilms } from '../../store/film-data/selectors';
import LoadingScreen from '../loading-screen/loading-screen';
import SimilarFilmList from '../../components/similar-film-list/similar-film-list';

export default function MoviePage(): JSX.Element {
  const navigate = useNavigate();
  const films = useAppSelector(getFilms);
  const [tab, setTab] = React.useState('Overview');
  if (films.length > 0) {
    const [{ name, genre, released, posterImage, backgroundImage }] = films;

    return (
      <div>
        <section className="film-card film-card--full">
          <div className="film-card__hero">
            <div className="film-card__bg">
              <img src={backgroundImage} alt={name} />
            </div>
            <h1 className="visually-hidden">WTW</h1>
            <Header />
            <div className="film-card__wrap">
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
                  <Link
                    className="btn film-card__button"
                    to={AppRoute.AddReview}
                  >
                    Add review
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="film-card__wrap film-card__translate-top">
            <div className="film-card__info">
              <div className="film-card__poster film-card__poster--big">
                <img src={posterImage} alt={name} width="218" height="327" />
              </div>

              <div className="film-card__desc">
                <nav className="film-nav film-card__nav">
                  <ul className="film-nav__list">
                    <li
                      className="film-nav__item film-nav__item--active"
                      onClick={(evt: React.MouseEvent<HTMLLIElement>) =>
                        setTab(evt.currentTarget.textContent as string)}
                    >
                      <span className="film-nav__link">Overview</span>
                    </li>
                    <li
                      className="film-nav__item"
                      onClick={(evt: React.MouseEvent<HTMLLIElement>) =>
                        setTab(evt.currentTarget.textContent as string)}
                    >
                      <span className="film-nav__link">Details</span>
                    </li>
                    <li
                      className="film-nav__item"
                      onClick={(evt: React.MouseEvent<HTMLLIElement>) =>
                        setTab(evt.currentTarget.textContent as string)}
                    >
                      <span className="film-nav__link">Reviews</span>
                    </li>
                  </ul>
                </nav>
                <Tabs tab={tab} />
              </div>
            </div>
          </div>
        </section>

        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>

            <div className="catalog__films-list">
              <SimilarFilmList />
            </div>
          </section>

          <footer className="page-footer">
            <div className="logo">
              <a href="main.html" className="logo__link logo__link--light">
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
      </div>
    );
  } else {
    return <LoadingScreen />;
  }
}
