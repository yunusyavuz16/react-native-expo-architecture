// loading slice

import { createSlice } from "@reduxjs/toolkit";

interface LoadingState {
  loadingActivityIndicator: boolean;
}

const initialState: LoadingState = {
  loadingActivityIndicator: false,
};

const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setLoadingActivityIndicator: (state, action) => {
      state.loadingActivityIndicator = action.payload;
    },
  },
});

export const { setLoadingActivityIndicator } = loadingSlice.actions;
export default loadingSlice.reducer;
