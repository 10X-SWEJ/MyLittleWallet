import { Switch } from "@chakra-ui/react";
import { useEffect, useState } from "react";

function Header() {
   const [darkMode, setDarkMode] = useState<boolean | null>(null);
   useEffect(() => {
      const element = document.getElementById("theme-switch");
      if (element && darkMode !== null) {
         if (darkMode) {
            element.dataset.theme = "dark";
         } else {
            element.dataset.theme = "light";
         }
      }
   }, [darkMode]);
   return (
      <header className="py-10 space-y-20">
         <div className="w-full h-full flex items-center justify-between">
            <div>
               <h1 className="text-4xl font-bold text-text-main">
                  Good Evening
                  <span>
                     <input
                        type="text"
                        defaultValue={"user"}
                        className="ml-[10px] h-full bg-transparent border-none outline-none w-fit cursor-pointer"
                     />
                  </span>
               </h1>
            </div>
            <div>
               <Switch onChange={() => setDarkMode(darkMode === null ? true : !darkMode)} />
            </div>
         </div>
         <div className="grid grid-cols-3 gap-5">
            <div className="rounded-[20px] bg-gradient-to-r from-[#bd6532] to-[#f24a2c] min-w-[100px] h-[200px]"></div>
            <div className="rounded-[20px] bg-gradient-to-r from-[#45af30] to-[#43f22c] min-w-[100px] h-[200px]"></div>
            <div className="rounded-[20px] bg-gradient-to-r from-[#3032af] to-[#4a2cf2] min-w-[100px] h-[200px]"></div>
         </div>
      </header>
   );
}

export default Header;
