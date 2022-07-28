import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { CardProps } from '../../types/types';

function Card(props: CardProps) {
  const { id, posterImage, name, onMouseEnter, onMouseLeave } = props;

  return (
    <article
      key={id}
      className="small-film-card catalog__films-card"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="small-film-card__image">
        <img src={posterImage} alt={name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={AppRoute.Film}>
          {name}
        </Link>
      </h3>
    </article>
  );
}

export default Card;
