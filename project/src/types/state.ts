import { store } from '../store/index';

export type Store = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
