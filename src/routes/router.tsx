import { createBrowserRouter } from "react-router-dom";
import { ExpenseIncomeTable } from "../Pages/Table";
import App from "../App";

import data from "../../database/pfm_db.json";

function loader() {
   return data as any;
}

export const router = createBrowserRouter([
   {
      path: "/",
      element: <App />,
      children: [
         {
            path: "table",
            loader,
            element: <ExpenseIncomeTable />,
            errorElement: <h1>Oh no error</h1>,
         },
         {
            path: "charts",
            loader,
            element: <h1>Hello World</h1>,
            errorElement: <h1>Oh no error</h1>,
         },
      ],
   },
]);
