import BaseTable from "./BaseTable";
import { useGetIncomeQuery } from "../../api/apiSlice/apiSlice";
import { TableLoading } from "./index.table";

export default function ExpenseTable() {
   const { data, isLoading, isError } = useGetIncomeQuery("walletApi");

   if (isLoading) {
      return <TableLoading />;
   }

   if (isError) {
      return <TableLoading />;
   }

   return <BaseTable data={data} />;
}
