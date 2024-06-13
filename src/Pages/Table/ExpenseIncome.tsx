import { Header, Table, Loading, ErrorMessage, TabBar } from "./index.table";
import { useGetExpenseTransactionsQuery } from "../../api/slice/apiSlice";

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
      <div className="overflow-x-hidden max-w-6xl mx-auto pt-10">
         
         <Header />
         <TabBar list={list} />
      </div>
   );
}
export default ExpenseIncomeTable;
