import { Link } from 'react-router-dom';
import { Films } from '../../types/types';

export type CardProps = Films & {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

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
        <Link
          className="small-film-card__link"
          to={`/films/:${id}`}
          title={name}
        >
          {name}
        </Link>
      </h3>
    </article>
  );
}

export default Card;
