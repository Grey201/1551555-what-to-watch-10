import { useAppDispatch } from '../../store';
import { activeFilter } from '../../store/action';
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
        dispatch(activeFilter(evt.currentTarget.textContent))}
    >
      <Link to="#" className="catalog__genres-link">
        {nameGenre}
      </Link>
    </li>
  );
}
