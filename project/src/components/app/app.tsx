import MainScreen from '../../pages/main-screen/main-screen';

type AppMoviesProps = {
  name: string;
  genre: string;
  release: number;
};

function App({ name, genre, release }: AppMoviesProps): JSX.Element {
  return <MainScreen filmName={name} filmGenre={genre} filmRelease={release} />;
}

export default App;
