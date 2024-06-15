import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const walletApi = createApi({
   reducerPath: "walletApi",
   baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
   endpoints: (builder) => ({
      getAllTransactions: builder.query({
         query: () => "transactions?_sort=date&_page=1&_limit=10",
      }),
      getExpenses: builder.query({
         query: () => "transactions?_sort=date&status=expense&_limit=10",
      }),
      getIncome: builder.query({
         query: () => "transactions?_sort=date&status=income&_limit=10",
      }),
   }),
});

export const { useGetAllTransactionsQuery, useGetIncomeQuery, useGetExpensesQuery } = walletApi;
