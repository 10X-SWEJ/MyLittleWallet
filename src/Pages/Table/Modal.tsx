import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button } from "@chakra-ui/react";

export function DetailModal({ isOpen, onClose, id }: any) {
   return (
      <Modal onClose={onClose} isOpen={isOpen} isCentered size="xl">
         <ModalOverlay />
         <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>You clicked on : {id}</ModalBody>
            <ModalFooter>
               <Button onClick={onClose}>Close</Button>
            </ModalFooter>
         </ModalContent>
      </Modal>
   );
}
