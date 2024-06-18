import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { walletApi } from "../api/apiSlice/apiSlice";
import userSettingReducer from "./useSettingSlice";

const rootReducers = combineReducers({
   userSetting: userSettingReducer,
   [walletApi.reducerPath]: walletApi.reducer,
});

export const store = configureStore({
   reducer: rootReducers,
   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(walletApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
