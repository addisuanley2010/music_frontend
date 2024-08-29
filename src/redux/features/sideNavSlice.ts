import { createSlice } from '@reduxjs/toolkit';

interface SideNavState {
  isOpen: boolean;
}

const initialState: SideNavState = {
  isOpen: false,
};

const sideNavSlice = createSlice({
  name: 'sideNav',
  initialState,
  reducers: {
    toggleSideNav: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleSideNav } = sideNavSlice.actions;

export const sideNavReducer = sideNavSlice.reducer;