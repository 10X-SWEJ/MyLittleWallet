import { useNavigate } from "react-router-dom";
import { AutomationIcon, ProfileIcon, MemberIcon, WishlistIcon, SidebarOpenIcon, SettingIcon } from "../../assets/index.icon";
import RouteCard from "./RouteCard";

function SideBar({ sidebarClose, setSidebarClose }: { sidebarClose: boolean; setSidebarClose: (state: boolean) => void }) {
   const navigate = useNavigate();
   return (
      <aside
         className={`fixed bottom-0 left-0 ${
            sidebarClose ? "left-[-250px]" : "left-0"
         } overflow-x-visible flex flex-col justify-between py-5 px-2 bg-main w-[250px] min-h-screen border-r-2 border-r-gray-800/50 transition-[left] duration-500`}
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
               <RouteCard icon={<SettingIcon />} name="Setting" routeName="setting" />
            </div>
         </div>
         <button
            title="sidebar button"
            className={`transition-all delay-300 duration-150 z-[1000] absolute top-5 right-10 ${
               sidebarClose ? "translate-x-[90px]" : "translate-x-[21px] "
            }`}
            onClick={() => {
               setSidebarClose(!sidebarClose);
            }}
         >
            <SidebarOpenIcon />
         </button>
      </aside>
   );
}

export default SideBar;
