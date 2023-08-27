
import { SidebarLogo } from "./SidebarLogo";
import { SidebarMenu } from "./SidebarMenu";

export const Sidebar = () => {

    return (
        <aside className="fixed left-0 top-0 w-16 sm:w-32 bg-white">
            <div className="bg-primary-200 w-full h-28 flex items-center">
                <SidebarLogo />
            </div>
            <SidebarMenu />
        </aside>
    )
}