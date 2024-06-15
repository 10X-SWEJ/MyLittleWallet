import { Header, Table, Loading, ErrorMessage, TabBar, Sidebar } from "./index.table";
import { useGetExpenseTransactionsQuery } from "../../api/slice/apiSlice";
import { useState } from "react";

function ExpenseIncomeTable() {
   const { data, isLoading, isError } = useGetExpenseTransactionsQuery("walletApi");

   const list = [
      {
         name: "All",
         children: <Table data={data} />,
      },
      {
         name: "Expense",
         children: <Table data={data} />,
      },
      {
         name: "Income",
         children: <Table data={data} />,
      },
   ];

   if (isError) {
      return <ErrorMessage />;
   }

   if (isLoading) {
      return <Loading />;
   }

   return (
      <div>
         <Header />
         <TabBar list={list} />
      </div>
   );
}
export default ExpenseIncomeTable;
