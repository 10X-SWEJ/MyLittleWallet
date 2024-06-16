import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, TabIndicator } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

export default function OptionModal({ isOpen, onClose }: any) {
   return (
      <Modal onClose={onClose} isOpen={isOpen} isCentered size="xl">
         <ModalOverlay />
         <ModalContent>
            <ModalHeader>Choose your view</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
               <Tabs position="relative" variant="unstyled">
                  <TabList>
                     <Tab>Yearly</Tab>
                     <Tab>Monthly</Tab>
                     <Tab>Daily</Tab>
                  </TabList>
                  <TabIndicator mt="-1.5px" height="2px" bg="blue.500" borderRadius="1px" />
                  <TabPanels>
                     <TabPanel>
                        <p>Yearly view</p>
                     </TabPanel>
                     <TabPanel>
                        <p>Monthly List</p>
                     </TabPanel>
                     <TabPanel>
                        <p>Daily List</p>
                     </TabPanel>
                  </TabPanels>
               </Tabs>
            </ModalBody>
            <ModalFooter>
               <Button onClick={onClose}>Close</Button>
            </ModalFooter>
         </ModalContent>
      </Modal>
   );
}
