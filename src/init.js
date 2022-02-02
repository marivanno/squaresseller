import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import './scss/style.scss';
import App from './components/App.jsx';
import rootReducer from './reducers/index.js';

const store = configureStore({
  reducer: rootReducer,
});

const init = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default init;
