import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';
import { reducer } from './reducer';
import { Store, AppDispatch } from '../types/state';

export const store = configureStore({ reducer });
export const useAppSelector: TypedUseSelectorHook<Store> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
