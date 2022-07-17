import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

export default function Error404(): JSX.Element {
  return (
    <div style={{paddingLeft: 40}}>
      <h1> Error 404 </h1>
      <p>Something went wrong.</p>
      <p style={{ height: 30}}>Very, very wrong.</p>
      <Link to={AppRoute.Main}>Go to main page</Link>
    </div>
  );
}


