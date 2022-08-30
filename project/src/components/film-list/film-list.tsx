import { useAppSelector } from '../../store';
import { Card } from '../card/card';
import { Fragment } from 'react';
import { selectorFilms } from '../../store/film-data/selectors';
import ShowMoreButton from '../show-more-button/show-more-button';
import React from 'react';

export default function FilmList(): JSX.Element {
  const filterFilms = useAppSelector(selectorFilms);
  const [count, setCount] = React.useState(8);
  const moviesCount = filterFilms.length;
  const showFilms = filterFilms.slice(0, count);

  const filmList = showFilms.map((filmData) => (
    <Card key={filmData.id} {...filmData} />
  ));

  return (
    <Fragment>
      <div className="catalog__films-list">{filmList}</div>
      {count <= moviesCount &&
        <ShowMoreButton getIncrement={() => setCount(count + 8)} />}
    </Fragment>
  );
}
