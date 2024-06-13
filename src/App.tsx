import { useRoutes } from "react-router-dom";
import { ExpenseIncomeTable } from "./Pages/Table/index.table";
import Charts from "./Pages/Charts/Charts";

function App() {
   const routes = useRoutes([
      {
         path: "/",
         element: <ExpenseIncomeTable />,
         errorElement: <h1>Oh no error {":("}</h1>,
         children: [],
      },
      {
         path: "/charts",
         element: <Charts />,
         errorElement: <h1>Oh no error {":("}</h1>,
      },
      {
         path: "/info",
         element: <Charts />,
         errorElement: <h1>Oh no error {":("}</h1>,
      },
   ]);

   return routes;
}

export default App;
