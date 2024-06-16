import BaseTable from "./BaseTable";
import { useGetExpensesQuery } from "../../api/slice/apiSlice";
import { TableLoading } from "./index.table";

export default function ExpenseTable() {
   const { data, isLoading, isError } = useGetExpensesQuery("walletApi");

   if (isLoading) {
      return <TableLoading />;
   }

   if (isError) {
      return <TableLoading />;
   }

   return <BaseTable data={data} />;
}
