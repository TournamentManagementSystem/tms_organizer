import { createSlice } from "@reduxjs/toolkit";

export const appContextSlice = createSlice({
  name: "appContext",
  initialState: {},
  reducers: {
    setUserId: (state, action) => {
      state.userId = action.userId;
    }
  }
});

export const appContextActions = appContextSlice.actions;

export default appContextSlice.reducer;
