import { configureStore } from "@reduxjs/toolkit";
import { walletApi } from "../api/slice/apiSlice";

export const store = configureStore({
   reducer: {
      [walletApi.reducerPath]: walletApi.reducer,
   },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(walletApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
