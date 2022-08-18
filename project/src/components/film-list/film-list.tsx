import { useAppSelector } from '../../store';
import { Card } from '../card/card';
import { Fragment } from 'react';
import { DEFAULT_GENRE } from '../../const';

export default function FilmList(): JSX.Element {
  const selectedGenre = useAppSelector((state) => state.genre);
  const filterFilms = useAppSelector((state) =>
    selectedGenre === DEFAULT_GENRE
      ? state.films
      : state.films.filter((film) => film.genre === selectedGenre)
  );
  const filmList = filterFilms.map((filmData) => (
    <Card key={filmData.id} {...filmData} />
  ));

  return <Fragment> {filmList} </Fragment>;
}
