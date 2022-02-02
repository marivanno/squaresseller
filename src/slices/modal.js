import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isOpen: false,
  },
  reducers: {
    toOpenWindow: (state) => {
      state.isOpen = !state.isOpen;
    },
  },

});

export const { toOpenWindow } = modalSlice.actions;
export default modalSlice.reducer;
