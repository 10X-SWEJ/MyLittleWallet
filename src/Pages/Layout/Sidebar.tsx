import { useNavigate } from "react-router-dom";
import { AutomationIcon, ProfileIcon, MemberIcon, WishlistIcon, SidebarOpenIcon } from "../../assets/index.icon";
import RouteCard from "./RouteCard";

function SideBar({ sidebarClose, setSidebarClose }: { sidebarClose: boolean; setSidebarClose: (state: boolean) => void }) {
   const navigate = useNavigate();
   return (
      <aside
         className={`fixed bottom-0 left-0 ${
            sidebarClose ? "left-[-250px]" : "left-0"
         } z-50 overflow-x-visible flex flex-col justify-between py-5 px-2 bg-main w-[250px] min-h-screen border-r-2 border-r-gray-800/50 transition-[left] duration-500`}
      >
         <div className="text-text-main space-y-10 cursor-pointer p-5">
            <div className="text-2xl font-bold" onClick={() => navigate("/")}>
               MyLilWallet
            </div>
            <div className="space-y-5">
               <RouteCard icon={<AutomationIcon />} name="Automation" routeName="automation" />
               <RouteCard icon={<ProfileIcon />} name="Profile" routeName="profile" />
               <RouteCard icon={<MemberIcon />} name="Member" routeName="members" />
               <RouteCard icon={<WishlistIcon />} name="Wishlist" routeName="wishlist" />
            </div>
         </div>
         <button
            title="sidebar button"
            className="z-[1000px] absolute top-[50%] right-0 translate-x-[26px] -translate-y-1/2"
            onClick={() => {
               setSidebarClose(!sidebarClose);
            }}
         >
            <SidebarOpenIcon/>
         </button>
      </aside>
   );
}

export default SideBar;
