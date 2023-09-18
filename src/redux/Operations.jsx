import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://65081bcf56db83a34d9bc3f1.mockapi.io';

export const fetchCars = createAsyncThunk(
  'cars/getAll',
  async (page, thunkAPI) => {
    try {
      const response = await axios.get(`/advert?page=${page}&limit=8`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
