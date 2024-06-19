import BaseTable from "./BaseTable";
import { useGetAllTransactionsQuery } from "../../api/apiSlice/apiSlice";
import { TableLoading, TableError } from "./index.table";

export default function ExpenseTable() {
   const { data, isLoading, isError } = useGetAllTransactionsQuery("walletApi");

   if (isLoading) {
      return <TableLoading />;
   }

   if (isError) {
      return <TableError />;
   }

   return <BaseTable data={data} />;
}
