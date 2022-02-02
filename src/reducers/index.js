import { combineReducers } from '@reduxjs/toolkit';
import modal from '../slices/modal.js';
import squareList from '../slices/squareList.js';
import popularColors from '../slices/popularColors.js';

export default combineReducers(
  {
    modal,
    squareList,
    popularColors,
  },
);
