import React from "react";

// components
import { Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { AllTable, ExpenseTable, Header, IncomeTable } from "./index.table";

function ExpenseIncomeTable() {
   const list = [
      {
         name: "All",
         children: <AllTable />,
      },
      {
         name: "Expense",
         children: <ExpenseTable />,
      },
      {
         name: "Income",
         children: <IncomeTable />,
      },
   ];
   return (
      <div>
         <Header />
         <Tabs position="relative" variant="unstyled">
            <TabList className="ml-5 w-fit">
               {list.map(({ name }) => (
                  <React.Fragment key={name}>
                     <Tab>{name}</Tab>
                  </React.Fragment>
               ))}
            </TabList>
            <TabIndicator height="5px" className="bg-text-main" />
            <TabPanels className="p-0 w-full">
               {list.map(({ children, name }) => (
                  <React.Fragment key={name}>
                     <TabPanel className="p-0 w-full">{children}</TabPanel>
                  </React.Fragment>
               ))}
            </TabPanels>
         </Tabs>
      </div>
   );
}
export default ExpenseIncomeTable;
