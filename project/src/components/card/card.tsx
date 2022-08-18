import { Link } from 'react-router-dom';
import { Film } from '../../types/types';
import VideoPlayer from '../video-player/video-pleyer';

export type CardProps = Film & {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

export function Card(props: Film) {
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
