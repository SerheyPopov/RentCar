import { configureStore } from '@reduxjs/toolkit';

import { CarsReducer } from './CarsSlice';


export const store = configureStore({
  reducer: {
    cars: CarsReducer,
  },
});
