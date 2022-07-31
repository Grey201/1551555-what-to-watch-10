import { Link } from 'react-router-dom';
import { Films } from '../../types/types';
import VideoPlayer from '../video-player/video-pleyer';

export type CardProps = Films & {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

function Card(props: Films) {
  const { id, posterImage, name, previewVideoLink } = props;

  return (
    <article key={id} className="small-film-card catalog__films-card">
      <Link className="small-film-card__link" to={`/films/:${id}`}>
        <VideoPlayer src={previewVideoLink} poster={posterImage} />
        <h3 className="small-film-card__title">{name}</h3>
      </Link>
    </article>
  );
}

export default Card;
