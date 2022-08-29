import { useAppSelector } from '../../store';
import { getSimilarFilms} from '../../store/film-data/selectors';
import { Card } from '../card/card';
import { Fragment } from 'react';

export default function SimilarFilmList(): JSX.Element {
  const similarFilms = (useAppSelector(getSimilarFilms)).slice(0,3);
  const filmList = similarFilms.map((filmData) => (
    <Card key={filmData.id} {...filmData} />
  ));

  return <Fragment> {filmList} </Fragment>;
}
