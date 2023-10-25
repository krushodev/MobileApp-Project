import { configureStore } from '@reduxjs/toolkit';

import authSlice from './slices/authSlice';
import drawerSlice from './slices/drawerSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    drawer: drawerSlice
  }
});

export type IRootState = ReturnType<typeof store.getState>;
