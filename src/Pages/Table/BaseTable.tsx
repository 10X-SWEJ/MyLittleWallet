import { Fragment } from "react/jsx-runtime";
import { TData } from "../../types/types";
import { formatCurrency } from "../../utils/currencyConvert";
import { useNavigate } from "react-router-dom";

function BaseTable({ data }: { data: TData[] | [] }) {
   const navigate = useNavigate();

   return (
      <>
         <table className="w-full mx-auto px-[15px] py-[11px] bg-main rounded-[6px] shadow-lg drop-shadow-lg">
            <thead className="h-[56px]">
               <tr className="text-left ">
                  <th className="px-[15px] cursor-pointer">Title</th>
                  <th className="px-[15px] cursor-pointer">Image</th>
                  <th className="px-[15px] cursor-pointer">Date</th>
                  <th className="px-[15px] cursor-pointer">Category</th>
                  <th className="px-[15px] cursor-pointer">Amount(MMK)</th>
                  <th className="px-[15px] cursor-pointer">Archive</th>
               </tr>
            </thead>
            <tbody className="text-left [&>*:nth-child(odd)]:bg-secondary overflow-x-scroll">
               {data.map(({ id, category, image, date, title, netAmount, status }: TData) => (
                  <tr onClick={() => navigate("/table/1")} key={id} className="h-[56px] border-y border-gray-700/50 font-thin text-text-main">
                     <td className="max-w-[150px] truncate nth px-[15px] cursor-pointer hover:text-text-hover">{title}</td>
                     <td className="nth px-[15px] cursor-pointer hover:text-text-hover">
                        <img src={image} alt="image" className="w-5 h-5 object-cover rounded-[20px]" />
                     </td>
                     <td className="nth px-[15px] cursor-pointer hover:text-text-hover">{date}</td>
                     <td className="nth px-[15px] cursor-pointer hover:text-text-hover">{category}</td>
                     <td style={status === "expense" ? { color: "red" } : { color: "green" }} className="nth px-[15px] cursor-pointer font-bold">
                        <span>{status === "expense" ? "-" : "+"}</span> {formatCurrency(netAmount, true)}
                     </td>
                     <td className="nth px-[15px] cursor-pointer">
                        {status === "expense" ? (
                           <div className="bg-red-800 text-white px-2 py-0 rounded-md w-fit">{status}</div>
                        ) : (
                           <div className="bg-green-800 text-white px-2 py-0 rounded-md w-fit">{status}</div>
                        )}
                     </td>
                  </tr>
               ))}
            </tbody>
            <tfoot className="w-full h-20">
               <tr>
                  <th role="row" colSpan={9}>
                     <div className="font-thin flex w-full justify-between items-center max-w-[700px] mx-auto">
                        <button>previous</button>
                        <div className="w-full flex items-center justify-center gap-5">
                           {[...new Array(5).keys()].map((k) => {
                              k = k + 1;
                              return (
                                 <Fragment key={k}>
                                    <div>{k}</div>
                                 </Fragment>
                              );
                           })}
                        </div>
                        <button>next</button>
                     </div>
                  </th>
               </tr>
            </tfoot>
         </table>
      </>
   );
}

export default BaseTable;
