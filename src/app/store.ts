import { configureStore } from '@reduxjs/toolkit';
import { dragonSlice } from './features/dragons/dragonSlice';

export const store = configureStore({
  reducer: {
    dragons: dragonSlice.reducer,
  },
});

export type Dragons = ReturnType<typeof store.getState>;
export type DragonActions = typeof store.dispatch;
