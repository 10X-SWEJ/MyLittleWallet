import { useRoutes } from "react-router-dom";
import { ExpenseIncomeTable } from "../Pages/Table/index.table";
import Home from "../Pages/Home/Home";
import Charts from "../Pages/Charts/Charts";

export function MainRouter() {
   const routes = useRoutes([
      {
         path: "/",
         element: <Home />,
      },
      {
         path: "/table",
         element: <ExpenseIncomeTable />,
         errorElement: <h1>Oh no error</h1>,
         children: [],
      },
      {
         path: "/charts",
         element: <Charts />,
         errorElement: <h1>Oh no error</h1>,
      },
   ]);

   return routes;
}
