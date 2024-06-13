import { Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React from "react";
export default function TabBar({ list }: { list: { name: string; children: React.ReactElement }[] }) {
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
