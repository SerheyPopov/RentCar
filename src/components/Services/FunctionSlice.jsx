export const handlePending = state => {
  state.isLoading = true;
};

export const handleFulfielledGet = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.carsList = action.payload;
};

export const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
