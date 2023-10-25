import { createSlice } from '@reduxjs/toolkit';

export interface DrawerStateProps {
  isOpen: boolean;
}

const initialState: DrawerStateProps = {
  isOpen: false
};

const drawer = createSlice({
  name: 'drawer',
  initialState,
  reducers: {
    showDrawer: state => {
      state.isOpen = true;
    },
    hideDrawer: state => {
      state.isOpen = false;
    },
    toggleDrawer: state => {
      state.isOpen = !state.isOpen;
    }
  }
});

export const { showDrawer, hideDrawer, toggleDrawer } = drawer.actions;

export default drawer.reducer;
