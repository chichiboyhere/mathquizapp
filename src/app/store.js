import { configureStore, combineReducers } from "@reduxjs/toolkit";
import arithmeticGameReducer from "../features/arithmeticGameSlice";
import multiplicationGameReducer from "../features/multiplicationGameSlice";


export const store = configureStore({
  reducer: {
    arithmeticGame: arithmeticGameReducer,
    multiplicationGame: multiplicationGameReducer,
  }
});

