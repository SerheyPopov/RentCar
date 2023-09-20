import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'favorite',
  initialState: {
    favorite: [],
  },
  reducers: {
    favoriteCars(state, action) {
      state.favorite = [...state.favorite, action.payload];
      },
      deleteFavorite(state, action) {
           const index = state.favorite.findIndex(
             fave => fave.id === action.payload
           );
           state.favorite.splice(index, 1);
      }
  },
});

export const { favoriteCars, deleteFavorite } = filterSlice.actions;
export const favoriteReducer = filterSlice.reducer;
