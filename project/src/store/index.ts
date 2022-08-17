import { configureStore} from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';
import { reducer } from './reducer';
import { Store, AppDispatch } from '../types/state';
import { createAPI } from '../services/api';

export const useAppSelector: TypedUseSelectorHook<Store> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const api = createAPI();
export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});
