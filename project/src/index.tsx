import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Provider } from 'react-redux';
import { store } from './store/';
import {
  fetchFilmsAction,
  checkAuthAction,
  fetchCommentsAction,
  fetchSimilarFilms,
} from './store/api-actions';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

store.dispatch(fetchFilmsAction());
store.dispatch(fetchCommentsAction(10));
store.dispatch(fetchSimilarFilms(1));
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer theme="dark" />
      <App />
    </Provider>
  </React.StrictMode>
);
