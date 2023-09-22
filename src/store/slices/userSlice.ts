import { createSlice } from '@reduxjs/toolkit';

interface UserStateProps {
  user: {
    firstName: string;
    lastName: string;
    email: string;
    image: string;
  } | null;
  isActive: boolean;
}

const initialState: UserStateProps = {
  user: null,
  isActive: false
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.isActive = true;
    },
    removeUser: state => {
      state.user = null;
      state.isActive = false;
    }
  }
});

export default userSlice.reducer;
