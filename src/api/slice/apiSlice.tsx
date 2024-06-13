import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TData } from "../../types/types";

export const walletApi = createApi({
   reducerPath: "walletApi",
   baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
   endpoints: (builder) => ({
      getExpenseTransactions: builder.query({
         query: () => "/expense",
      }),
   }),
});

export const { useGetExpenseTransactionsQuery } = walletApi;
