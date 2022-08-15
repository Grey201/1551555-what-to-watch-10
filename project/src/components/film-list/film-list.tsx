import { useAppSelector } from '../../store';
import Card from '../card/card';
import { Fragment } from 'react';

export default function FilmList(): JSX.Element {
  const selectedGenre = useAppSelector((state) => state.genre);
  const filterFilms = useAppSelector((state) => state.films.filter((film) => selectedGenre === 'All genres' ? film : film.genre === selectedGenre));
  const filmList = filterFilms.map((filmData) => (
    <Card key={filmData.id} {...filmData} />
  ));

  return <Fragment> {filmList} </Fragment>;
}
