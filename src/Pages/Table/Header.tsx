import { Switch, useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { formatCurrency } from "../../utils/currencyConvert";
import { BalanceIcon, ExpenseIcon, IncomeIcon } from "../../assets/index.icon";
import OptionModal from "./OptionModal";
import { IconButton } from "@chakra-ui/react";
import { CalendarIcon } from "../../assets/index.icon";

function Header() {
   const [darkMode, setDarkMode] = useState<boolean | null>(null);
   const { isOpen, onClose, onOpen } = useDisclosure();
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
               <div className="text-xl w-full inline-flex items-center">
                  <div title="change">
                     Showing data for
                     <span className="text-blue-500 mx-1">2024</span>
                  </div>
                  <IconButton aria-label="menu" icon={<CalendarIcon />} onClick={onOpen} colorScheme="black" />
                  <OptionModal onClose={onClose} isOpen={isOpen} />
               </div>
               <div className="text-sm font-bold text-text-stone-400">You're now viewing yearly transactions</div>
            </div>
            <div>
               <Switch onChange={() => setDarkMode(darkMode === null ? true : !darkMode)} />
            </div>
         </div>
         <div className="grid grid-cols-3 gap-5">
            <div className="rounded-[20px] bg-gradient-to-r from-[#bd6532] to-[#f24a2c]  min-w-[100px] h-[200px] flex items-center justify-center gap-5 relative">
               <ExpenseIcon stroke="#eb8574" />
               <div className="flex flex-col items-start text-white">
                  <strong className="text-3xl font-bold">Expense</strong>
                  <strong>{formatCurrency(100000)}</strong>
               </div>
            </div>
            <div className="rounded-[20px] bg-gradient-to-r from-[#45af30] to-[#43f22c]  min-w-[100px] h-[200px] flex items-center justify-center gap-5 relative">
               <IncomeIcon stroke="#75f065" />
               <div className="flex flex-col items-start text-white">
                  <strong className="text-3xl font-bold">Income</strong>
                  <strong>{formatCurrency(150000)}</strong>
               </div>
            </div>
            <div className="rounded-[20px] bg-gradient-to-r from-[#3032af] to-[#4a2cf2]  min-w-[100px] h-[200px] flex items-center justify-center gap-5 relative">
               <BalanceIcon stroke="#614ae2" />
               <div className="flex flex-col items-start text-white">
                  <strong className="text-3xl font-bold">Balance</strong>
                  <strong>{formatCurrency(500000)}</strong>
               </div>
            </div>
         </div>
      </header>
   );
}

export default Header;
