import { createSlice } from '@reduxjs/toolkit';

const popularColors = createSlice({
  name: 'popularColors',
  initialState: {
    colorList: [],

  },
  reducers: {
    fetchColorList: (state) => {
      const colors = ['#b9e762', '#FFFFCC', '#CCCC00', '#b4b249', '#dab09b', '#868f5e', '#eca8bf', '#ecbed5', '#f367bb', '#FF66FF', '#CC33FF', '#eb9deb', '#a16dee', '#a7bde9', '#00CCFF', '#669999', '#99FFFF', '#379bec', '#e0ff33', '#61c4ae', '#CC99FF', '#FFCCFF', '#61f7d1', '#8499df', '#495bf7', '#1f191f'];
      const getRandomColor = () => Math.floor(Math.random() * 25);
      const data = new Array(8).fill({});
      state.colorList = data.map((item, k) => (
        { ...item, ...{ color: colors[getRandomColor()], selected: false, number: k } }
      ));
    },
    chooseColor: (state, action) => {
      const n = action.payload;
      const newColorList = state.colorList
        .map((item) => (item.number === n
          ? { ...item, ...{ selected: true } } : { ...item, selected: false }));
      state.colorList = newColorList;
    },
    resetChooseColor: (state) => {
      state.colorList = state.colorList.map((item) => {
        const { color, number } = item;
        return { color, selected: false, number };
      });
    },
  },

});

export const { fetchColorList, chooseColor, resetChooseColor } = popularColors.actions;
export default popularColors.reducer;
