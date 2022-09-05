import { configureStore } from "@reduxjs/toolkit";
import appContextSlice from "./slices/appContextSlice";

export default configureStore({
  reducer: {
    appContextSlice
  }
});
