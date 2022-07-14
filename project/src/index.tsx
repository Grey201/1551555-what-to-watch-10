import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Film } from './types/types';

const film: Film = {
  name: 'The Grand Budapest Hotel',
  genre: 'Drama',
  release: 2014,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App promoFilm={film} />
  </React.StrictMode>
);
