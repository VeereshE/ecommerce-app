
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../Slices/index';

export const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});