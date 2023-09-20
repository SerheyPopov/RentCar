import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from './Operations';
import {
  handlePending,
  handleFulfielledGet,
  handleRejected,
} from '../components/Services/FunctionSlice';

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    carsList: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCars.fulfilled, handleFulfielledGet)
      .addCase(fetchCars.pending, handlePending)
      .addCase(fetchCars.rejected, handleRejected)
 
  },
});
export const CarsReducer = carsSlice.reducer;
