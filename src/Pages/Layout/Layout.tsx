import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function Layout() {
   const [sidebarClose, setSidebarClose] = useState(false);
   return (
      <main className=" overflow-x-hidden relative">
         <Sidebar sidebarClose={sidebarClose} setSidebarClose={setSidebarClose} />
         <div
            style={sidebarClose ? { marginLeft: 0, paddingInline: "25px" } : { marginLeft: "250px", paddingInline: "40px" }}
            className="transition-all duration-500"
         >
            <Outlet />
         </div>
      </main>
   );
}
