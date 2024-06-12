import { useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { TData } from "../../types/types";
import { DetailModal } from "./Modal";

function Table({ data }: { data: TData[] | [] }) {
   const { isOpen, onOpen, onClose } = useDisclosure();
   const [id, SetId] = useState<null | number>(null);

   return (
      <>
         <DetailModal isOpen={isOpen} onClose={onClose} id={id} />
         <table className="w-full mx-auto px-[15px] py-[11px] bg-main rounded-[6px] shadow-lg drop-shadow-lg">
            <thead className="h-[56px]">
               <tr className="text-left ">
                  <th className="px-[15px] cursor-pointer">Id</th>
                  <th className="px-[15px] cursor-pointer">Name</th>
                  <th className="px-[15px] cursor-pointer">Email</th>
                  <th className="px-[15px] cursor-pointer"></th>
                  <th className="px-[15px] cursor-pointer">City</th>
                  <th className="px-[15px] cursor-pointer">I don't know</th>
                  <th className="px-[15px] cursor-pointer">Member</th>
               </tr>
            </thead>
            <tbody className="text-left [&>*:nth-child(odd)]:bg-secondary overflow-x-scroll">
               {data.map(({ id, category, image, date, archive, title, amount }: TData) => (
                  <tr
                     key={id}
                     className="h-[56px] border-y border-gray-700/50 font-thin text-text-main"
                     onClick={() => {
                        onOpen();
                        SetId(id);
                     }}
                  >
                     <td className="nth px-[15px] cursor-pointer hover:text-text-hover">{id}</td>
                     <td className="nth px-[15px] cursor-pointer hover:text-text-hover">{title}</td>
                     <td className="nth px-[15px] cursor-pointer hover:text-text-hover">
                        <img src={image} alt="image" className="w-5 h-5 object-cover rounded-[20px]" />
                     </td>
                     <td className="nth px-[15px] cursor-pointer hover:text-text-hover">{date}</td>
                     <td className="nth px-[15px] cursor-pointer hover:text-text-hover">{category}</td>
                     <td className="nth px-[15px] cursor-pointer hover:text-text-hover">{amount}</td>
                     <td className="nth px-[15px] cursor-pointer">{archive ? "Archived" : "Visible"}</td>
                  </tr>
               ))}
            </tbody>
            <tfoot className="w-full h-20">
               <tr>
                  <th role="row" colSpan={9}>
                     {/*  */}
                  </th>
               </tr>
            </tfoot>
         </table>
      </>
   );
}

export default Table;
