import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay } from "@chakra-ui/react";
export default function DetailDrawer({ isOpen, onClose }: any) {
   return (
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
         <DrawerOverlay />
         <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Edit your transaction</DrawerHeader>

            <DrawerBody>{/* content here */}</DrawerBody>

            <DrawerFooter>
               <Button variant="outline" mr={3} onClick={onClose}>
                  Cancel
               </Button>
               <Button colorScheme="blue">Save</Button>
            </DrawerFooter>
         </DrawerContent>
      </Drawer>
   );
}
