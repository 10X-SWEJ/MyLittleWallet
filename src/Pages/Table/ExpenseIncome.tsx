import { Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React from "react";
import { useLoaderData } from "react-router-dom";
import { Header, Table } from "./index";

function TabBar({ list }: { list: { name: string; children: React.ReactElement }[] }) {
   return (
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
   );
}

function ExpenseIncomeTable() {
   const data = useLoaderData() as any;

   const list = [
      {
         name: "All",
         children: <Table data={data.income} />,
      },
      {
         name: "Expense",
         children: <Table data={data.expense} />,
      },
      {
         name: "Income",
         children: <Table data={data.income} />,
      },
   ];

   return (
      <div className="overflow-x-hidden">
         <Header />
         <TabBar list={list} />
      </div>
   );
}
export default ExpenseIncomeTable;
