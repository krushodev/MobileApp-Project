import { createSlice } from '@reduxjs/toolkit';

import type { IUser } from '../../types';

interface AuthStateProps {
  user: IUser | null;
  isActive: boolean;
  accessToken: string | null;
}

const initialState: AuthStateProps = {
  user: null,
  accessToken: null,
  isActive: false
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { accessToken, user } = action.payload;

      state.accessToken = accessToken;
      state.user = user;
      state.isActive = true;
    },
    removeUser: state => {
      state.user = null;
      state.accessToken = null;
      state.isActive = false;
    },
    setUserImage: (state, action) => {
      if (state.user) {
        state.user = { ...state.user, image: action.payload };
      }
      return;
    }
  }
});

export const { setUser, removeUser, setUserImage } = authSlice.actions;

export default authSlice.reducer;
