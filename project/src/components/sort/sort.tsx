import { useAppDispatch } from '../../store';
import { activeGenre } from '../../store/action';
import { Link } from 'react-router-dom';

export default function SortFilm({
  nameGenre,
}: {
  nameGenre: string;
}): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <li
      className="catalog__genres-item"
      onClick={(evt: React.MouseEvent<HTMLLIElement>) =>
        dispatch(activeGenre(evt.currentTarget.textContent))}
    >
      <Link to="#" className="catalog__genres-link">
        {nameGenre}
      </Link>
    </li>
  );
}
