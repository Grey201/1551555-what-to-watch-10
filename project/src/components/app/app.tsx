import MainScreen from '../../pages/main-screen/main-screen';
import { Film } from '../../types/types';

function App({ promoFilm }: { promoFilm: Film }): JSX.Element {
  return <MainScreen film={promoFilm} />;
}

export default App;
