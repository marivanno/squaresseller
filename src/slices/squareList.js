import { createSlice, createSelector } from '@reduxjs/toolkit';

const squareList = createSlice({
  name: 'squaresList',
  initialState: {
    tmpColor: null,
    squares: [],
    currentSquare: null,
    status: null,
    errors: null,
  },
  reducers: {
    toBuySquare: (state, action) => {
      const { squares } = state;
      const { color, numer } = action.payload;
      state.squares = squares.map((square) => {
        if (square.numer === numer) {
          square.color = color;
          return square;
        }
        return square;
      });
    },
    toChangeCurrentSquare: (state, action) => {
      state.currentSquare = action.payload;
    },
    toSetTmpColor: (state, action) => {
      state.tmpColor = action.payload;
    },
    fetchSquares: (state) => {
      const fakeFetchResult = () => {
        const colorsList = ['#b9e762', '#FFFFCC', '#CCCC00', '#b4b249', '#dab09b', '#868f5e', '#eca8bf', '#ecbed5', '#f367bb', '#FF66FF', '#CC33FF', '#eb9deb', '#a16dee', '#a7bde9', '#00CCFF', '#669999', '#99FFFF', '#379bec', '#e0ff33', '#61c4ae', '#CC99FF', '#FFCCFF', '#61f7d1', '#8499df', '#495bf7', '#1f191f'];
        const getRandomColor = () => Math.floor(Math.random() * 25);
        const getRandomType = () => Math.floor(Math.random() * 2);
        const start = new Array(300).fill({});
        const result = start.map((square, k) => {
          const stamp = getRandomType() === 1 ? 'stamp-sold' : 'stamp-sale';
          return {
            ...square,
            ...{
              owner: 'none', color: colorsList[getRandomColor()], salesStatus: stamp, currentPrise: 1, numer: `${k + 1}`,
            },
          };
        });
        return result;
      };
      state.squares = fakeFetchResult();
    },
  },
});

export const selectCurrentSquare = createSelector([
  (state) => state.squareList.squares,
  (state) => state.squareList.currentSquare,
],
(list, current) => list.filter((square) => square.numer === String(current))[0]);

export const {
  toBuySquare, fetchSquares, toSetTmpColor, toChangeCurrentSquare,
} = squareList.actions;
export default squareList.reducer;
