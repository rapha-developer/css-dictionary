
import { SidebarLogo } from "./SidebarLogo";
import { SidebarMenu } from "./SidebarMenu";

export const Sidebar = () => {

    return (
        <aside className="w-16 sm:w-32 bg-white relative">
            <div className="bg-primary-200 w-full h-28 flex items-center">
                <SidebarLogo />
            </div>
            <SidebarMenu />
        </aside>
    )
}