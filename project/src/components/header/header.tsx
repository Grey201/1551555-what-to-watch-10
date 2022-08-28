import { AppRoute, AuthorizationStatus } from '../../const';
import { Link } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../../store';
import { logoutAction } from '../../store/api-actions';
import { getAuthorizationStatus } from '../../store/user-process/selectors';

export default function Header() {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const dispatch = useAppDispatch();
  return (
    <header className="page-header film-card__head">
      <div className="logo">
        <Link className="logo__link" to={AppRoute.Main}>
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>

      <ul className="user-block">
        {authorizationStatus === AuthorizationStatus.Auth ? (
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img
                src="img/avatar.jpg"
                alt="User avatar"
                width="63"
                height="63"
              />
            </div>
          </li>
        ) : null}
        <li className="user-block__item">
          {authorizationStatus === AuthorizationStatus.NoAuth ? (
            <Link className="user-block__link" to={AppRoute.SignIn}>
              Sign in
            </Link>
          ) : (
            <Link
              className="user-block__link"
              onClick={(evt) => {
                evt.preventDefault();
                dispatch(logoutAction());
              }}
              to="/"
            >
              Sign out
            </Link>
          )}
        </li>
      </ul>
    </header>
  );
}
