import React from "react";
import { useNavigate } from "react-router-dom";

export default function RouteCard({ icon, name, routeName }: { icon: React.ReactElement; name: string; routeName: string }) {
   const navigate = useNavigate();
   return (
      <div onClick={() => navigate(routeName)} className="flex items-center justify-start gap-7 hover:bg-secondary px-2 py-1 rounded-[20px] text-text-main">
         {icon}
         <div>{name}</div>
      </div>
   );
}
