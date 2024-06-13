import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay } from "@chakra-ui/react";
import React from "react";

export default function NavMenu({ isOpen, onClose }: any) {
   const btnRef = React.useRef<any>();

   return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose} finalFocusRef={btnRef} size="sm" colorScheme="black">
         <DrawerOverlay />
         <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>{/*  */}</DrawerHeader>

            <DrawerBody>{/*  */}</DrawerBody>

            <DrawerFooter>{/*  */}</DrawerFooter>
         </DrawerContent>
      </Drawer>
   );
}
