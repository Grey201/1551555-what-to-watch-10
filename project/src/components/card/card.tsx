import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Films } from '../../types/types';

function Card({...films}:Films) {
  const {name, posterImage, id}=films;
  return (
    <article key={id} className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img
          src={posterImage}
          alt={name}
          width="280"
          height="175"
        />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={AppRoute.Player}>
          {name}
        </Link>
      </h3>
    </article>
  );
}
export default Card;

