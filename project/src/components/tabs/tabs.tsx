import React, { Fragment } from 'react';
import { useAppSelector } from '../../store';
import { getFilms } from '../../store/film-data/selectors';
import { Tab } from '../../const';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import Review from '../review/review';

export default function Tabs({ tab }: { tab: string }): JSX.Element {
  const films = useAppSelector(getFilms);

  if (tab === Tab.Overview) {
    const [{ description, rating, director, starring }] = films;
    const stars = starring.join(', ');
    return (
      <>
        <div className="film-rating">
          <div className="film-rating__score">{rating}</div>
          <p className="film-rating__meta">
            <span className="film-rating__level">Very good</span>
            <span className="film-rating__count">240 ratings</span>
          </p>
        </div>

        <div className="film-card__text">
          <p>{description}</p>

          <p className="film-card__director">
            <strong>Director: {director}</strong>
          </p>

          <p className="film-card__starring">
            <strong>Starring: {stars}</strong>
          </p>
        </div>
      </>
    );
  }

  if (tab === Tab.Details) {
    const [{ genre, runTime, released, director, starring }] = films;
    return (
      <div className="film-card__text film-card__row">
        <div className="film-card__text-col">
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Director</strong>
            <span className="film-card__details-value">{director}</span>
          </p>
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Starring</strong>
            <span className="film-card__details-value">
              {starring.map((star, index) => (
                <Fragment key={index}>
                  <span>{star}, </span> <br />
                </Fragment>
              ))}
            </span>
          </p>
        </div>
        <div className="film-card__text-col">
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Run Time</strong>
            <span className="film-card__details-value">{runTime}</span>
          </p>
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Genre</strong>
            <span className="film-card__details-value">{genre}</span>
          </p>
          <p className="film-card__details-item">
            <strong className="film-card__details-name">Released</strong>
            <span className="film-card__details-value">{released}</span>
          </p>
        </div>
      </div>
    );
  }

  if (tab === Tab.Reviews) {
    const [{ genre, runTime, released, director, starring }] = films;
    return (
      <div className="film-card__reviews film-card__row">
        <div className="film-card__reviews-col">
         <Review/>
        </div>
      </div>
    );
  } else {
    return <LoadingScreen />;
  }
}
