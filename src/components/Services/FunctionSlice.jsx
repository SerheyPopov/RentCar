export const handlePending = state => {
  state.isLoading = true;
};

export const handleFulfielledGet = (state, action) => {
  state.isLoading = false;
  state.error = null;
  const aa = [...state.carsList, ...action.payload];
  state.carsList = aa;
console.log(aa);

};

export const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
