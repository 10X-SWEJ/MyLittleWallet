import { Outlet } from "react-router-dom";
import NavMenu from "./NavMenu";
import { useDisclosure } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { MenuIcon } from "../assets/Menu.icon";

export default function Root() {

   const { isOpen, onClose, onOpen } = useDisclosure();

   return (
      <main className="min-h-screen relative text-text-main overflow-x-hidden">
         <div className="max-w-7xl mx-auto pt-10">
            <IconButton aria-label="Menu" icon={<MenuIcon />} colorScheme="blue" onClick={onOpen}>
               Open
            </IconButton>
            <NavMenu isOpen={isOpen} onClose={onClose} />
            <Outlet />
         </div>
      </main>
   );
}
