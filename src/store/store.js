import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./reducer";
// import thunk from "redux-thunk";

export default configureStore({
  reducer: {
    appReducer,
  }
});
