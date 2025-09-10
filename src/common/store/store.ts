import { configureStore } from "@reduxjs/toolkit";
import { rootReducers } from "./rootReducers";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

//tao ra store luu tru state
const store = configureStore({
  reducer: rootReducers,
  devTools: true,//bat devtool cau redux
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
