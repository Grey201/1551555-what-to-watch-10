import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const Film = {
  name: 'The Grand Budapest Hotel',
  genre: 'Drama',
  release: 2014,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      name={Film.name}
      genre={Film.genre}
      release={Film.release}
    />
  </React.StrictMode>
);
