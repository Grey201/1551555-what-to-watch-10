import { useAppSelector } from '../../store';
import { getSimilarFilms } from '../../store/film-data/selectors';
import { Card } from '../card/card';
import { Fragment } from 'react';

export default function SimilarFilmList(): JSX.Element {
  const similarFilms = useAppSelector(getSimilarFilms);
  console.log(similarFilms);
  const filmList = similarFilms.map((filmData) => (
    <Card key={filmData.id} {...filmData} />
  ));

  return <Fragment> {filmList} </Fragment>;
}
//   return (
//     <article className="small-film-card catalog__films-card">
//       <div className="small-film-card__image">
//         <img
//           src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg"
//           alt="Fantastic Beasts: The Crimes of Grindelwald"
//           width="280"
//           height="175"
//         />
//       </div>
//       <h3 className="small-film-card__title">
//         <a className="small-film-card__link" href="film-page.html">
//           Fantastic Beasts: The Crimes of Grindelwald
//         </a>
//       </h3>
//     </article>
//   );
// }

// export{}
