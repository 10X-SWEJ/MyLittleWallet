import { useRoutes } from "react-router-dom";

import { Layout } from "./Pages/Layout/index";
import { ExpenseIncomeTable } from "./Pages/Table/index.table";
import { WishList } from "./Pages/Wishlist/index.wishList";
import { Member } from "./Pages/Members/index.member";
import { Profile } from "./Pages/Profile/index.profile";
import { Automation } from "./Pages/Automation/index.automation";
import { Setting } from "./Pages/Setting/index.setting";
import Detail from "./Pages/Table/Detail/Detail";

function Error({ message }: { message?: string }) {
   return (
      <div>
         <h1>Oh no error {":("}</h1>
         {message}
      </div>
   );
}

function App() {
   const routes = useRoutes([
      {
         path: "/",
         element: <Layout />,
         errorElement: <Error />,

         children: [
            {
               index: true,
               element: <ExpenseIncomeTable />,
               errorElement: <Error />,
            },
            {
               path: "table/:id",
               element: <Detail />,
               errorElement: <Error />,
            },
            {
               path: "members",
               element: <Member />,
               errorElement: <Error />,
            },
            {
               path: "profile",
               element: <Profile />,
               errorElement: <Error />,
            },
            {
               path: "wishlist",
               element: <WishList />,
               errorElement: <Error />,
            },
            {
               path: "automation",
               element: <Automation />,
               errorElement: <Error />,
            },
            {
               path: "setting",
               element: <Setting />,
               errorElement: <Error />,
            },
         ],
      },
   ]);

   return routes;
}

export default App;
