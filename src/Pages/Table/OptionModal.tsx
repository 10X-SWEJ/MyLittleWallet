import {
   Modal,
   ModalOverlay,
   ModalContent,
   ModalHeader,
   ModalFooter,
   ModalBody,
   ModalCloseButton,
   Button,
   TabIndicator,
   Select,
} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { monthNameGenerator } from "../../utils/monthNameGenerator";
import { Fragment } from "react/jsx-runtime";

export default function OptionModal({ isOpen, onClose }: any) {
   return (
      <Modal onClose={onClose} isOpen={isOpen} isCentered size="xl">
         <ModalOverlay />
         <ModalContent>
            <ModalHeader className="bg-secondary">Choose your view</ModalHeader>
            <ModalCloseButton />
            <ModalBody className="bg-secondary">
               <Tabs position="relative" variant="unstyled">
                  <TabList>
                     <Tab>Yearly</Tab>
                     <Tab>Monthly</Tab>
                     <Tab>
                        Daily <span className="text-text-secondary font-thin text-sm mx-1">(Default)</span>
                     </Tab>
                  </TabList>
                  <TabIndicator mt="-1.5px" height="2px" bg="blue.500" borderRadius="1px" />
                  <TabPanels>
                     <TabPanel>
                        <div className="block text-center w-full text-text-main">Year From-To</div>
                        <div className="flex items-center gap-5 py-5">
                           <Select placeholder="From">
                              <option value="2022">2022</option>
                              <option value="2023">2023</option>
                              <option value="2024">2024</option>
                           </Select>
                           <Select placeholder="To">
                              <option value="2022">2022</option>
                              <option value="2023">2023</option>
                              <option value="2024">2024</option>
                           </Select>
                        </div>
                     </TabPanel>
                     <TabPanel>
                        <div className="block text-center w-full text-text-main">Choose A Year</div>
                        <div className="flex items-center gap-5 py-5">
                           <Select placeholder="Year">
                              <option value="2022">2022</option>
                              <option value="2023">2023</option>
                              <option value="2024">2024</option>
                           </Select>
                        </div>
                     </TabPanel>
                     <TabPanel>
                        <div className="block text-center w-full text-text-main">Choose The Year & Month</div>
                        <div className="flex items-center gap-5 py-5">
                           <Select placeholder="Year">
                              <option value="2022">2022</option>
                              <option value="2023">2023</option>
                              <option value="2024">2024</option>
                           </Select>
                           <Select placeholder="Month">
                              {monthNameGenerator().map((month) => (
                                 <Fragment key={month}>
                                    <option value={month}>{month}</option>
                                 </Fragment>
                              ))}
                           </Select>
                        </div>
                     </TabPanel>
                  </TabPanels>
               </Tabs>
            </ModalBody>
            <ModalFooter className="bg-secondary">
               <Button onClick={onClose}>Close</Button>
            </ModalFooter>
         </ModalContent>
      </Modal>
   );
}
