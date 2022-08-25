import { useAppSelector } from '../../store';
import { Card } from '../card/card';
import { Fragment } from 'react';
import { selectorFilms } from '../../store/film-data/selectors';

export default function FilmList(): JSX.Element {
  const filterFilms = useAppSelector(selectorFilms);
  const filmList = filterFilms.map((filmData) => (
    <Card key={filmData.id} {...filmData} />
  ));

  return <Fragment> {filmList} </Fragment>;
}
