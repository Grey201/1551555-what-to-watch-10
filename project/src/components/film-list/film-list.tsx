import { useAppSelector } from '../../store';
import Card from '../card/card';
import { Fragment } from 'react';

export default function FilmList(): JSX.Element {
  const films = useAppSelector((state) => state.films);
  const filmsCount = films.length;
  const selectedGenre = useAppSelector((state) => state.genre);
  const sortedFilms = films
    .slice(0, filmsCount)
    .filter((film) =>
      selectedGenre === 'All genres' ? films : film.genre === selectedGenre
    );
  const filmList = sortedFilms.map((filmData) => (
    <Card key={filmData.id} {...filmData} />
  ));

  return <Fragment> {filmList} </Fragment>;
}
